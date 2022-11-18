"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceImplementation = void 0;
const goals_1 = require("./goals");
const plans_1 = require("./plans");
const tasks_1 = require("./tasks");
class ServiceImplementation {
    constructor() {
        this.plans = plans_1.planServiceImpl;
        this.tasks = tasks_1.TaskServiceImpl;
        this.goals = goals_1.GoalServiceImpl;
    }
}
exports.ServiceImplementation = ServiceImplementation;
