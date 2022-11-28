import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/tasks/types";

export interface ServerEvents {
	"Tasks:created": (todo: Api.TasksDto) => void;
	"Tasks:updated": (todo: Api.TasksDto) => void;
	"Tasks:deleted": (patientId: string, slotId: string) => void;
}

export interface ClientEvents {
	"Tasks:getAll": (patientId: string,
		limit: number | null | undefined,
		direction: Api.DirectionParamEnum | undefined,
		sortByField: string | null | undefined, callback: (res: t.GetTasksGetAllResponse) => void) => void;

	"Tasks:create": (
		payload: Api.TasksDto | undefined,
		callback: (res: t.PostTasksCreateResponse) => void
	) => void;

	"Tasks:get": (id: string, callback: (res: t.GetTasksGetResponse) => void) => void;

	"Tasks:update": (
		payload: Api.TasksDto | undefined,
		callback: (res?: t.PutTasksUpdateResponse) => void
	) => void;

	"Tasks:delete": (patientId: string, tasksId: string, callback: (res?: t.GetTasksGetAllResponse) => void) => void;
}