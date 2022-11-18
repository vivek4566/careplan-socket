import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/goals/types";
import * as v from "../../../dist/validation";
import { db } from "../../admin/types";

export class GoalService {
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
	): Promise<t.GetGoalsGetAllResponse> {
		try {
			const goalsQuerySnap = await db.collection(`${this.collectionName}`).get();
			const goals: Api.GoalsDto[] = goalsQuerySnap.docs
				.map((doc: { data: () => any ; }) => doc.data())
				.map((json: any) => v.modelApiGoalsDtoFromJson("goals", json));
			return {
				status: 200,
				body: {
					items: goals,
					totalCount: goals.length,
				},
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async get(id: string): Promise<t.GetGoalsGetResponse> {
		try {
			const goalsDocSnap = await db.doc(`${this.collectionName}/${id}`).get();
			if (!goalsDocSnap.exists) {
				throw new Error("no-goals-found");
			}
			const goals = v.modelApiGoalsDtoFromJson("goals", goalsDocSnap.data());
			return {
				status: 200,
				body: goals,
			};
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("no-goals-found")) {
				return {
					status: 404,
					body: {
						message: "No goals found with given id",
					},
				};
			}
			throw error;
		}
	}

	async create(request: Api.GoalsDto | undefined): Promise<t.PostGoalsCreateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}

			if (!request.goalId) {
				throw new Error("no-uId-found");
			}

			const goalsRef = db.collection(`${this.collectionName}`).doc(request.goalId);
			try {
				await this._checkUserExists(request.goalId);
			} catch (error: any) {
				if (error.toString().match("no-goals-found")) {
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
			throw new Error("goals-already-exists");
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

			if (error.toString().match("goals-already-exists")) {
				return {
					status: 422,
					body: {
						message: "goals already exists with given uid",
					},
				};
			}
			throw error;
		}
	}

	async update(request: Api.GoalsDto | undefined): Promise<t.PutGoalsUpdateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}

			if (!request.goalId) {
				throw new Error("no-goalId-found");
			}

			const goalsRef = db.collection(`${this.collectionName}`).doc(request.goalId);

			// checking whether patients exists or not
			const goalsRes = await this._checkUserExists(request.goalId);
			await goalsRef.update({
				...request,
				updatedAt: new Date().toISOString(),
			});
			return {
				status: 200,
				body: {
					...goalsRes,
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
						message: "No goalId found in request",
					},
				};
			}

			throw error;
		}
	}

	async delete(goalId: string): Promise<t.GetGoalsDeleteResponse> {
		try {
			await this._checkUserExists(goalId);
			const goalsRef = db.collection(`${this.collectionName}`).doc(goalId);
			await goalsRef.update({
				isExist: false,
				deletedAt: new Date().toISOString(),
			});
			return {
				status: 200,
				body: {
					message: "goals deleted successfully",
				},
			};
		} catch (error: any) {
			console.error(error);
			if (error?.response?.status === 404) {
				return {
					status: 404,
					body: {
						message: "goals already deleted or no patient found",
					},
				};
			}
			throw error;
		}
	}

	private async _checkUserExists(goalId: string) {
		const response = await this.get(goalId);
		if (response.status === 404) {
			throw new Error("no-goals-found");
		}
		return response.body;
	}
}
