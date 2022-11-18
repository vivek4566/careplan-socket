import { GoalService } from "./types";
import * as t from "../../../dist/api/goals/types";

const service = new GoalService();

export const GoalServiceImpl: t.GoalsApi = {
	postGoalsCreate: service.create,
	getGoalsDelete: service.delete,
	getGoalsGet: service.get,
	getGoalsGetAll: service.getAll,
	putGoalsUpdate: service.update,
};
