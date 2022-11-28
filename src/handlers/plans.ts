import { Server } from "socket.io";
import { ClientEvents, ServerEvents } from "../impl/plans/events";
import { ServiceImplementation } from "../impl/types";
import * as t from "../../dist/api/plans/types";
import { Api } from "../../dist/models";

function plansHandlers(
	io: Server<ClientEvents, ServerEvents>,
	implementation: ServiceImplementation
) {
	const { plans } = implementation;
	return {
		async getAll(patientId: string,
			limit: number | null | undefined,
			direction: Api.DirectionParamEnum | undefined,
			sortByField: string | null | undefined, callback: (res: t.GetPlansGetAllResponse) => void) {
			console.log("[socket] getAll requested");
			try {
				const res = await plans.getPlansGetAll(patientId, limit, direction, sortByField);
				callback(res);
			} catch (error) {
				console.error(error);
			}
		},

		async create(
			payload: Api.PlansDto | undefined,
			callback: (res: t.PostPlansCreateResponse) => void
		) {
			console.log("[socket] create requested");
			try {
				const res = await plans.postPlansCreate(payload);
				callback(res);
				if (res.status === 201) {
					io.emit("plans:created", res.body);
				}
			} catch (error) {
				console.error(error);
			}
		},
	};
}

export default plansHandlers;