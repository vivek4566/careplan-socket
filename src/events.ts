import { Api } from "../dist/models";
import * as g from "../dist/api/goals/types";
import * as p from "../dist/api/plans/types";
import * as t from "../dist/api/tasks/types";

export interface ServerEvents {
	"goals:created": (todo: Api.GoalsDto) => void;
	"goals:updated": (todo: Api.GoalsDto) => void;
	"goals:deleted": (patientId: string, slotId: string) => void;
    "plans:created": (todo: Api.PlansDto) => void;
	"plans:updated": (todo: Api.PlansDto) => void;
	"plans:deleted": (patientId: string, slotId: string) => void;
    "Tasks:created": (todo: Api.TasksDto) => void;
	"Tasks:updated": (todo: Api.TasksDto) => void;
	"Tasks:deleted": (patientId: string, slotId: string) => void;
}

export interface ClientEvents {
	"goals:getAll": (patientId: string,
		limit: number | null | undefined,
		direction: Api.DirectionParamEnum | undefined,
		sortByField: string | null | undefined, callback: (res: g.GetGoalsGetAllResponse) => void) => void;

	"goals:create": (
		payload: Api.GoalsDto | undefined,
		callback: (res: g.PostGoalsCreateResponse) => void
	) => void;

	"goals:get": (id: string, callback: (res: g.GetGoalsGetResponse) => void) => void;

	"goals:update": (
		payload: Api.GoalsDto | undefined,
		callback: (res?: g.PutGoalsUpdateResponse) => void
	) => void;

	"goals:delete": (patientId: string, goalId: string, callback: (res?: g.GetGoalsGetAllResponse) => void) => void;

    "plans:getAll": (patientId: string,
		limit: number | null | undefined,
		direction: Api.DirectionParamEnum | undefined,
		sortByField: string | null | undefined, callback: (res: p.GetPlansGetAllResponse) => void) => void;

	"plans:create": (
		payload: Api.PlansDto | undefined,
		callback: (res: p.PostPlansCreateResponse) => void
	) => void;

	"plans:get": (id: string, callback: (res: p.GetPlansGetResponse) => void) => void;

	"plans:update": (
		payload: Api.PlansDto | undefined,
		callback: (res?: p.PutPlansUpdateResponse) => void
	) => void;

	"plans:delete": (patientId: string, planId: string, callback: (res?: p.GetPlansGetAllResponse) => void) => void;


    
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








