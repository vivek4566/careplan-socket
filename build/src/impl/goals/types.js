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
exports.GoalService = void 0;
const v = __importStar(require("../../../dist/validation"));
const types_1 = require("../../admin/types");
class GoalService {
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
            const goalsQuerySnap = await types_1.db.collection(`${this.collectionName}`).get();
            const goals = goalsQuerySnap.docs
                .map((doc) => doc.data())
                .map((json) => v.modelApiGoalsDtoFromJson("goals", json));
            return {
                status: 200,
                body: {
                    items: goals,
                    totalCount: goals.length,
                },
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async get(goalId) {
        try {
            const goalsDocSnap = await types_1.db.doc(`${this.collectionName}/${goalId}`).get();
            if (!goalsDocSnap.exists) {
                throw new Error("no-goals-found");
            }
            const goals = v.modelApiGoalsDtoFromJson("goals", goalsDocSnap.data());
            return {
                status: 200,
                body: goals,
            };
        }
        catch (error) {
            console.error(error);
            if (error.toString().match("no-goals-found")) {
                return {
                    status: 404,
                    body: {
                        message: "No goals found with given id",
                    },
                };
            }
            throw error;
        }
    }
    async create(request) {
        try {
            if (!request) {
                throw new Error("invalid-inputs");
            }
            if (!request.goalId) {
                throw new Error("no-uId-found");
            }
            const goalsRef = types_1.db.collection(`${this.collectionName}`).doc(request.goalId);
            try {
                await this._checkUserExists(request.goalId);
            }
            catch (error) {
                if (error.toString().match("no-goals-found")) {
                    await goalsRef.set({
                        ...request,
                        isExist: true,
                        id: goalsRef.id,
                        createdAt: new Date().toISOString(),
                    });
                    return {
                        status: 201,
                        body: request,
                    };
                }
            }
            throw new Error("goals-already-exists");
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
            if (error.toString().match("goals-already-exists")) {
                return {
                    status: 422,
                    body: {
                        message: "goals already exists with given uid",
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
            if (!request.goalId) {
                throw new Error("no-uId-found");
            }
            const goalsRef = types_1.db.collection(`${this.collectionName}`).doc(request.goalId);
            // checking whether patients exists or not
            const goalsRes = await this._checkUserExists(request.goalId);
            await goalsRef.update({
                ...request,
                updatedAt: new Date().toISOString(),
            });
            return {
                status: 200,
                body: {
                    ...goalsRes,
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
    async delete(goalId) {
        try {
            await this._checkUserExists(goalId);
            const goalsRef = types_1.db.collection(`${this.collectionName}`).doc(goalId);
            await goalsRef.update({
                isExist: false,
                deletedAt: new Date().toISOString(),
            });
            return {
                status: 200,
                body: {
                    message: "goals deleted successfully",
                },
            };
        }
        catch (error) {
            console.error(error);
            if (error?.response?.status === 404) {
                return {
                    status: 404,
                    body: {
                        message: "goals already deleted or no patient found",
                    },
                };
            }
            throw error;
        }
    }
    async _checkUserExists(goalId) {
        const response = await this.get(goalId);
        if (response.status === 404) {
            throw new Error("no-goals-found");
        }
        return response.body;
    }
}
exports.GoalService = GoalService;
