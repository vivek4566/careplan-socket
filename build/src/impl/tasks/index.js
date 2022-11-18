"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServiceImpl = void 0;
const types_1 = require("./types");
const service = new types_1.TaskService();
exports.TaskServiceImpl = {
    postTasksCreate: service.create,
    getTasksDelete: service.delete,
    getTasksGet: service.get,
    getTasksGetAll: service.getAll,
    putTasksUpdate: service.update,
};
