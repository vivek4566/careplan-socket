"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalServiceImpl = void 0;
const types_1 = require("./types");
const service = new types_1.GoalService();
exports.GoalServiceImpl = {
    postGoalsCreate: service.create,
    getGoalsDelete: service.delete,
    getGoalsGet: service.get,
    getGoalsGetAll: service.getAll,
    putGoalsUpdate: service.update,
};
