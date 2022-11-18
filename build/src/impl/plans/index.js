"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planServiceImpl = void 0;
const types_1 = require("./types");
const service = new types_1.PlanService();
exports.planServiceImpl = {
    postPlansCreate: service.create,
    getPlansDelete: service.delete,
    getPlansGet: service.get,
    getPlansGetAll: service.getAll,
    putPlansUpdate: service.update,
};
