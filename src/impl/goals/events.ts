import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/goals/types";

export interface ServerEvents {
	"goals:created": (todo: Api.GoalsDto) => void;
	"goals:updated": (todo: Api.GoalsDto) => void;
	"goals:deleted": (patientId: string, slotId: string) => void;
}

export interface ClientEvents {
	"goals:getAll": (patientId: string,
		limit: number | null | undefined,
		direction: Api.DirectionParamEnum | undefined,
		sortByField: string | null | undefined, callback: (res: t.GetGoalsGetAllResponse) => void) => void;

	"goals:create": (
		payload: Api.GoalsDto | undefined,
		callback: (res: t.PostGoalsCreateResponse) => void
	) => void;

	"goals:get": (id: string, callback: (res: t.GetGoalsGetResponse) => void) => void;

	"goals:update": (
		payload: Api.GoalsDto | undefined,
		callback: (res?: t.PutGoalsUpdateResponse) => void
	) => void;

	"goals:delete": (patientId: string, goalId: string, callback: (res?: t.GetGoalsGetAllResponse) => void) => void;
}