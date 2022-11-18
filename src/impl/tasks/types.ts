import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/tasks/types";
import * as v from "../../../dist/validation";
import { db } from "../../admin/types";

export class TaskService {
	private readonly collectionName: string;

	constructor() {
		this.collectionName = "NEW-careplans";
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
		limit: number | null | undefined,
		direction: Api.DirectionParamEnum | undefined,
		sortByField: string | null | undefined
	): Promise<t.GetTasksGetAllResponse> {
		try {
			const TasksQuerySnap = await db.collection(`${this.collectionName}`).get();
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
			throw error;
		}
	}

	async get(taskid: string): Promise<t.GetTasksGetResponse> {
		try {
			const TasksDocSnap = await db.doc(`${this.collectionName}/${taskid}`).get();
			if (!TasksDocSnap.exists) {
				throw new Error("no-Tasks-found");
			}
			const Tasks = v.modelApiGoalsDtoFromJson("Tasks", TasksDocSnap.data());
			return {
				status: 200,
				body: Tasks,
			};
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("no-Tasks-found")) {
				return {
					status: 404,
					body: {
						message: "No Tasks found with given id",
					},
				};
			}
			throw error;
		}
	}
	async create(request: Api.TasksDto | undefined): Promise<t.PostTasksCreateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}

			if (!request.taskid) {
				throw new Error("no-uId-found");
			}

			const goalsRef = db.collection(`${this.collectionName}`).doc(request.taskid);
			try {
				await this._checkUserExists(request.taskid);
			} catch (error: any) {
				if (error.toString().match("no-tasks-found")) {
					await goalsRef.set({
						...request,
						isExist: true,
						id: goalsRef.id,
						createdAt: new Date().toISOString(),
					});
					return {
						status: 201,
						body: request,
					};
				}
			}
			throw new Error("tasks-already-exists");
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
						message: "tasks already exists with given taskid",
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

			if (!request.taskid) {
				throw new Error("no-taskid-found");
			}

			const TasksRef = db.collection(`${this.collectionName}`).doc(request.taskid);

			// checking whether Tasks exists or not
			const TasksRes = await this._checkUserExists(request.taskid);
			await TasksRef.update({
				...request,
				updatedAt: new Date().toISOString(),
			});
			return {
				status: 200,
				body: {
					...TasksRes,
					...request,
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
						message: "No taskid found in request",
					},
				};
			}

			throw error;
		}
	}

	async delete(taskid: string): Promise<t.GetTasksDeleteResponse> {
		try {
			await this._checkUserExists(taskid);
			const TasksRef = db.collection(`${this.collectionName}`).doc(taskid);
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

	private async _checkUserExists(taskid: string) {
		const response = await this.get(taskid);
		if (response.status === 404) {
			throw new Error("no-Tasks-found");
		}
		return response.body;
	}
}
