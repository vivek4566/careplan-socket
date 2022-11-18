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
exports.TaskService = void 0;
const v = __importStar(require("../../../dist/validation"));
const types_1 = require("../../admin/types");
class TaskService {
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
            const TasksQuerySnap = await types_1.db.collection(`${this.collectionName}`).get();
            const Tasks = TasksQuerySnap.docs
                .map((doc) => doc.data())
                .map((json) => v.modelApiTasksDtoFromJson("Tasks", json));
            return {
                status: 200,
                body: {
                    items: Tasks,
                    totalCount: Tasks.length,
                },
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async get(taskid) {
        try {
            const TasksDocSnap = await types_1.db.doc(`${this.collectionName}/${taskid}`).get();
            if (!TasksDocSnap.exists) {
                throw new Error("no-Tasks-found");
            }
            const Tasks = v.modelApiGoalsDtoFromJson("Tasks", TasksDocSnap.data());
            return {
                status: 200,
                body: Tasks,
            };
        }
        catch (error) {
            console.error(error);
            if (error.toString().match("no-Tasks-found")) {
                return {
                    status: 404,
                    body: {
                        message: "No Tasks found with given id",
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
            if (!request.taskid) {
                throw new Error("no-uId-found");
            }
            const TasksRef = types_1.db.collection(`${this.collectionName}`).doc(request.taskid);
            try {
                await this._checkUserExists(request.taskid);
            }
            catch (error) {
                if (error.toString().match("no-Tasks-found")) {
                    await TasksRef.set({
                        ...request,
                        isExist: true,
                        id: TasksRef.id,
                        createdAt: new Date().toISOString(),
                    });
                    return {
                        status: 201,
                        body: request,
                    };
                }
            }
            throw new Error("Tasks-already-exists");
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
            if (error.toString().match("Tasks-already-exists")) {
                return {
                    status: 422,
                    body: {
                        message: "Tasks already exists with given uid",
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
            if (!request.taskid) {
                throw new Error("no-uId-found");
            }
            const TasksRef = types_1.db.collection(`${this.collectionName}`).doc(request.taskid);
            // checking whether Tasks exists or not
            const TasksRes = await this._checkUserExists(request.taskid);
            await TasksRef.update({
                ...request,
                updatedAt: new Date().toISOString(),
            });
            return {
                status: 200,
                body: {
                    ...TasksRes,
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
    async delete(taskid) {
        try {
            await this._checkUserExists(taskid);
            const TasksRef = types_1.db.collection(`${this.collectionName}`).doc(taskid);
            await TasksRef.update({
                isExist: false,
                deletedAt: new Date().toISOString(),
            });
            return {
                status: 200,
                body: {
                    message: "Tasks deleted successfully",
                },
            };
        }
        catch (error) {
            console.error(error);
            if (error?.response?.status === 404) {
                return {
                    status: 404,
                    body: {
                        message: "tasks already deleted or no patient found",
                    },
                };
            }
            throw error;
        }
    }
    async _checkUserExists(taskid) {
        const response = await this.get(taskid);
        if (response.status === 404) {
            throw new Error("no-Tasks-found");
        }
        return response.body;
    }
}
exports.TaskService = TaskService;
