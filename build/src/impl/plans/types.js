"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanService = void 0;
const v = __importStar(require("../../../dist/validation"));
const types_1 = require("../../admin/types");
class PlanService {
    constructor() {
        this.collectionName = "NEW-careplans";
        this.getAll = this.getAll.bind(this);
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    /* *
     ! Todo: Implement pagination for this service
    */
    async getAll(limit, direction, sortByField) {
        try {
            const plansQuerySnap = await types_1.db.collection(`${this.collectionName}`).get();
            const plans = plansQuerySnap.docs
                .map((doc) => doc.data())
                .map((json) => v.modelApiPlansDtoFromJson("plans", json));
            return {
                status: 200,
                body: {
                    items: plans,
                    totalCount: plans.length,
                },
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async get(planId) {
        try {
            const plansDocSnap = await types_1.db.doc(`${this.collectionName}/${planId}`).get();
            if (!plansDocSnap.exists) {
                throw new Error("no-plans-found");
            }
            const plans = v.modelApiPlansDtoFromJson("goals", plansDocSnap.data());
            return {
                status: 200,
                body: plans,
            };
        }
        catch (error) {
            console.error(error);
            if (error.toString().match("no-plans-found")) {
                return {
                    status: 404,
                    body: {
                        message: "No plans found with given id",
                    },
                };
            }
            throw error;
        }
    }
    async create(request) {
        console.log(request);
        try {
            if (!request) {
                throw new Error("invalid-inputs");
            }
            if (!request.planId) {
                console.log("hlo");
                throw new Error("no-uId-found");
            }
            const plansRef = types_1.db.collection(`${this.collectionName}`).doc(request.planId);
            try {
                await this._checkUserExists(request.planId);
            }
            catch (error) {
                if (error.toString().match("no-plans-found")) {
                    await plansRef.set({
                        ...request,
                        isExist: true,
                        id: plansRef.id,
                        createdAt: new Date().toISOString(),
                    });
                    return {
                        status: 201,
                        body: request,
                    };
                }
            }
            throw new Error("plans-already-exists");
        }
        catch (error) {
            console.error(error);
            if (error.toString().match("invalid-inputs")) {
                return {
                    status: 422,
                    body: {
                        message: "Invalid request",
                    },
                };
            }
            if (error.toString().match("invalid-inputs")) {
                return {
                    status: 422,
                    body: {
                        message: "No uid found in request",
                    },
                };
            }
            if (error.toString().match("plans-already-exists")) {
                return {
                    status: 422,
                    body: {
                        message: "plans already exists with given uid",
                    },
                };
            }
            throw error;
        }
    }
    async update(request) {
        try {
            if (!request) {
                throw new Error("invalid-inputs");
            }
            if (!request.planId) {
                throw new Error("no-uId-found");
            }
            const plansRef = types_1.db.collection(`${this.collectionName}`).doc(request.planId);
            // checking whether patients exists or not
            const plansRes = await this._checkUserExists(request.planId);
            await plansRef.update({
                ...request,
                updatedAt: new Date().toISOString(),
            });
            return {
                status: 200,
                body: {
                    ...plansRes,
                    ...request,
                },
            };
        }
        catch (error) {
            console.error(error);
            if (error.toString().match("invalid-inputs")) {
                return {
                    status: 422,
                    body: {
                        message: "Invalid request",
                    },
                };
            }
            if (error.toString().match("invalid-inputs")) {
                return {
                    status: 422,
                    body: {
                        message: "No uid found in request",
                    },
                };
            }
            throw error;
        }
    }
    async delete(planId) {
        try {
            await this._checkUserExists(planId);
            const plansRef = types_1.db.collection(`${this.collectionName}`).doc(planId);
            await plansRef.update({
                isExist: false,
                deletedAt: new Date().toISOString(),
            });
            return {
                status: 200,
                body: {
                    message: "plans deleted successfully",
                },
            };
        }
        catch (error) {
            console.error(error);
            if (error?.response?.status === 404) {
                return {
                    status: 404,
                    body: {
                        message: "plans already deleted or no patient found",
                    },
                };
            }
            throw error;
        }
    }
    async _checkUserExists(planId) {
        const response = await this.get(planId);
        if (response.status === 404) {
            throw new Error("no-goals-found");
        }
        return response.body;
    }
}
exports.PlanService = PlanService;
