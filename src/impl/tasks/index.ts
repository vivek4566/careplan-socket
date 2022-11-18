import { TaskService } from "./types";
import * as t from "../../../dist/api/tasks/types";

const service = new TaskService();

export const TaskServiceImpl: t.TasksApi = {
	postTasksCreate: service.create,
	getTasksDelete: service.delete,
	getTasksGet: service.get,
	getTasksGetAll: service.getAll,
	putTasksUpdate: service.update,
};
