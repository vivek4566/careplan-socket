import { Server } from "socket.io";
import { ClientEvents, ServerEvents } from "../impl/goals/events";
import { ServiceImplementation } from "../impl/types";
import * as t from "../../dist/api/goals/types";
import { Api } from "../../dist/models";

function goalsHandlers(
	io: Server<ClientEvents, ServerEvents>,
	implementation: ServiceImplementation
) {
	const { goals } = implementation;
	return {
		async getAll(patientId: string,
			limit: number | null | undefined,
			direction: Api.DirectionParamEnum | undefined,
			sortByField: string | null | undefined, callback: (res: t.GetGoalsGetAllResponse) => void) {
			console.log("[socket] getAll requested");
			try {
				const res = await goals.getGoalsGetAll(patientId, limit, direction, sortByField);
				callback(res);
			} catch (error) {
				console.error(error);
			}
		},

		async create(
			payload: Api.GoalsDto | undefined,
			callback: (res: t.PostGoalsCreateResponse) => void
		) {
			console.log("[socket] create requested");
			try {
				const res = await goals.postGoalsCreate(payload);
				callback(res);
				if (res.status === 201) {
					io.emit("goals:created", res.body);
				}
			} catch (error) {
				console.error(error);
			}
		},
	};
}

export default goalsHandlers;