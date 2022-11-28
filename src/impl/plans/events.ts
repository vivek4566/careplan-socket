import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/plans/types";

export interface ServerEvents {
	"plans:created": (todo: Api.PlansDto) => void;
	"plans:updated": (todo: Api.PlansDto) => void;
	"plans:deleted": (patientId: string, slotId: string) => void;
}

export interface ClientEvents {
	"plans:getAll": (patientId: string,
		limit: number | null | undefined,
		direction: Api.DirectionParamEnum | undefined,
		sortByField: string | null | undefined, callback: (res: t.GetPlansGetAllResponse) => void) => void;

	"plans:create": (
		payload: Api.PlansDto | undefined,
		callback: (res: t.PostPlansCreateResponse) => void
	) => void;

	"plans:get": (id: string, callback: (res: t.GetPlansGetResponse) => void) => void;

	"plans:update": (
		payload: Api.PlansDto | undefined,
		callback: (res?: t.PutPlansUpdateResponse) => void
	) => void;

	"plans:delete": (patientId: string, planId: string, callback: (res?: t.GetPlansGetAllResponse) => void) => void;
}