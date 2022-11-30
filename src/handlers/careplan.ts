import { Server } from "socket.io";
import { ClientEvents, ServerEvents } from "../events";
import { ServiceImplementation } from "../impl/types";
import * as g from "../../dist/api/goals/types";
import * as p from "../../dist/api/plans/types";
import * as t from "../../dist/api/tasks/types";
import { Api } from "../../dist/models";

function careplanHandlers(
	io: Server<ClientEvents, ServerEvents>,
	implementation: ServiceImplementation
) {
	const { goals } = implementation;
    const { plans } = implementation;
    const { tasks }= implementation;
	return {
		async goalgetAll(patientId: string,
			limit: number | null | undefined,
			direction: Api.DirectionParamEnum | undefined,
			sortByField: string | null | undefined, callback: (res: g.GetGoalsGetAllResponse) => void) {
			console.log("[socket] goalgetAll requested");
			try {
				const res = await goals.getGoalsGetAll(patientId, limit, direction, sortByField);
				callback(res);
			} catch (error) {
				console.error(error);
			}
		},

		async goalcreate(
			payload: Api.GoalsDto | undefined,
			callback: (res: g.PostGoalsCreateResponse) => void
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
        async plangetAll(patientId: string,
			limit: number | null | undefined,
			direction: Api.DirectionParamEnum | undefined,
			sortByField: string | null | undefined, callback: (res: p.GetPlansGetAllResponse) => void) {
			console.log("[socket] getAll requested");
			try {
				const res = await plans.getPlansGetAll(patientId, limit, direction, sortByField);
				callback(res);
			} catch (error) {
				console.error(error);
			}
		},

		async plancreate(
			payload: Api.PlansDto | undefined,
			callback: (res: p.PostPlansCreateResponse) => void
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

        async taskgetAll(patientId: string,
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

		async taskcreate(
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

//-------------

export default careplanHandlers;
