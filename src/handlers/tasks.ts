import { Server } from "socket.io";
import { ClientEvents, ServerEvents } from "../impl/tasks/events";
import { ServiceImplementation } from "../impl/types";
import * as t from "../../dist/api/tasks/types";
import { Api } from "../../dist/models";

function taskHandlers(
	io: Server<ClientEvents, ServerEvents>,
	implementation: ServiceImplementation
) {
	const { tasks } = implementation;
	return {
		async getAll(patientId: string,
			limit: number | null | undefined,
			direction: Api.DirectionParamEnum | undefined,
			sortByField: string | null | undefined, callback: (res: t.GetTasksGetAllResponse) => void) {
			console.log("[socket] getAll requested");
			try {
				const res = await tasks.getTasksGetAll(patientId, limit, direction, sortByField);
				callback(res);
			} catch (error) {
				console.error(error);
			}
		},

		async create(
			payload: Api.TasksDto | undefined,
			callback: (res: t.PostTasksCreateResponse) => void
		) {
			console.log("[socket] create requested");
			try {
				const res = await tasks.postTasksCreate(payload);
				callback(res);
				if (res.status === 201) {
					io.emit("Tasks:created", res.body);
				}
			} catch (error) {
				console.error(error);
			}
		},
	};
}

export default taskHandlers;