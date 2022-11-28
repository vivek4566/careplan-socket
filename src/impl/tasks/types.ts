import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/tasks/types";
import * as v from "../../../dist/validation";
import { db } from "../../admin/types";

export class TaskService {
	private readonly collectionName: string;

	constructor() {
		this.collectionName = "PATIENTS";
		this.getAll = this.getAll.bind(this);
		this.get = this.get.bind(this);
		this.create = this.create.bind(this);
		this.update = this.update.bind(this);
		this.delete = this.delete.bind(this);
	}

	/* *
	 ! Todo: Implement pagination for this service
	*/
	async getAll(
		patientId: string,
		limit: number | null | undefined,
		direction: Api.DirectionParamEnum | undefined,
		sortByField: string | null | undefined
	): Promise<t.GetTasksGetAllResponse> {
		try {
			const TasksQuerySnap = await db.collectionGroup(`TASKS`).where("patientId","==",patientId).get();
			const Tasks: Api.TasksDto[] = TasksQuerySnap.docs
				.map((doc: { data: () => any; }) => doc.data())
				.map((json: any) => v.modelApiTasksDtoFromJson("Tasks", json));
			return {
				status: 200,
				body: {
					items: Tasks,
					totalCount: Tasks.length,
				},
			};
		} catch (error) {
			console.error(error);
			//throw error;
			return {
				status: 404,
				body: {message:`something went wrong`}
			}
		}
	}

	async get(id: string): Promise<t.GetTasksGetResponse> {
		try {
			const tasksDocSnap =   (await db.collectionGroup(`TASKS`).where("taskId","==",id).get()).docs[0];
			if (!tasksDocSnap.exists) {
				throw new Error("no-tasks-found");
			}
			const tasks = v.modelApiTasksDtoFromJson("tasks", tasksDocSnap.data());
			return {
				status: 200,
				body: tasks,
			};
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("no-task-found")) {
				return {
					status: 404,
					body: {
						message: "No task found with given id",
					},
				};
			}
			// throw error;
			return {
				status: 404,
				body: {message:`something went wrong`}
			}
		}
	}
	async create(request: Api.TasksDto | undefined): Promise<t.PostTasksCreateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}

			if (!request.patientId) {
				throw new Error("no-uId-found");
			}
			

			const tasksRef = db.collection(`${this.collectionName}/${request.patientId}/CAREPLAN/${request.taskid}/TASKS`).doc();
			request.taskid = tasksRef.id
			const tasksRequest = v.modelApiTasksDtoFromJson("tasks", request);
			try {
				const patient = await this._checkUserExists(request.patientId);
				// console.log("pppp",patient)
				await tasksRef.set({
					...tasksRequest,
					isExist: true,
					createdAt: new Date().toISOString(),
				});
				return {
					status: 201,
					body: request,
				};
			} catch (error: any) {
				if (error.toString().match("no-patient-found")) {
					throw new Error("no-patient-found");
				}
				throw error;

			}
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("invalid-inputs")) {
				return {
					status: 422,
					body: {
						message: "Invalid request",
					},
				};
			}

			if (error.toString().match("invalid-inputs")) {
				return {
					status: 422,
					body: {
						message: "No uid found in request",
					},
				};
			}

			if (error.toString().match("tasks-already-exists")) {
				return {
					status: 422,
					body: {
						message: "tasks already exists with given uid",
					},
				};
			}
			throw error;
		}
	}

	async update(request: Api.TasksDto | undefined): Promise<t.PutTasksUpdateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}

			if (!request.patientId) {
				throw new Error("no-patientId-found");
			}

			if (!request.taskid) {
				throw new Error("no-taskId-found");
			}
			const taskRequest = JSON.parse(JSON.stringify(request))
			const tasksRef = db.collection(`${this.collectionName}/${request.patientId}/CAREPLAN/${request.taskid}/GOALS`).doc(request.taskid);
			
			await tasksRef.update({
				...taskRequest,
				updatedAt: new Date().toISOString(),
			});
			return {
				status: 200,
				body: {
					...taskRequest,
				},
			};
	
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("invalid-inputs")) {
				return {
					status: 422,
					body: {
						message: "Invalid request",
					},
				};
			}

			if (error.toString().match("invalid-inputs")) {
				return {
					status: 422,
					body: {
						message: "No taskId found in request",
					},
				};
			}

			return {
				status: 422,
				body: {
					message: "no task found with given info",
				},
			};		}
	}

	async delete(patientId:string,taskid: string): Promise<t.GetTasksDeleteResponse> {
		try {
			await this._checkUserExists(taskid);
			const TasksRef = (await db.collectionGroup(`TASKS`).where("goalId","==",taskid).where("patientId","==",patientId).get()).docs[0].ref
			await TasksRef.update({
				isExist: false,
				deletedAt: new Date().toISOString(),
			});
			return {
				status: 200,
				body: {
					message: "Tasks deleted successfully",
				},
			};
		} catch (error: any) {
			console.error(error);
			if (error?.response?.status === 404) {
				return {
					status: 404,
					body: {
						message: "tasks already deleted or no patient found",
					},
				};
			}
			throw error;
		}
	}

	private async _checkUserExists(patientId: string) {
		const response = await db.collection("PATIENTS").doc(patientId).get();
		if (!response) {
			throw new Error("no-patient-found");
		}
		return response.data();
	}
}
