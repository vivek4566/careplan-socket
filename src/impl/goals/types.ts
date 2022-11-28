import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/goals/types";
import * as v from "../../../dist/validation";
import { db } from "../../admin/types";

export class GoalService {
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
	): Promise<t.GetGoalsGetAllResponse> {
		try {
			const goalsQuerySnap = await db.collectionGroup(`GOALS`).where("patientId","==",patientId).get();
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
			//throw error;
			return {
				status: 404,
				body: {message:`something went wrong`}
			}
		}
	}

	async get(id: string): Promise<t.GetGoalsGetResponse> {
		try {
			const goalsDocSnap =   (await db.collectionGroup(`GOALS`).where("goalId","==",id).get()).docs[0];
			if (!goalsDocSnap.exists) {
				throw new Error("no-goal-found");
			}
			const goals = v.modelApiGoalsDtoFromJson("goals", goalsDocSnap.data());
			return {
				status: 200,
				body: goals,
			};
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("no-goal-found")) {
				return {
					status: 404,
					body: {
						message: "No goal found with given id",
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

	async create(request: Api.GoalsDto | undefined): Promise<t.PostGoalsCreateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}

			if (!request.patientId) {
				throw new Error("no-uId-found");
			}
			
			const goalsRef = db.collection(`${this.collectionName}/${request.patientId}/CAREPLAN/${request.goalId}/GOALS`).doc();
			request.goalId = goalsRef.id
			const goalsRequest = v.modelApiGoalsDtoFromJson("goals", request);
			try {
				const patient = await this._checkUserExists(request.patientId);
				// console.log("pppp",patient)
				await goalsRef.set({
					...goalsRequest,
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
			if (!request.patientId) {
				throw new Error("no-patientId-found");
			}


			if (!request.goalId) {
				throw new Error("no-uId-found");
			}
			

			const goalsRequest = JSON.parse(JSON.stringify(request))
			const goalsRef = db.collection(`${this.collectionName}/${request.patientId}/CAREPLAN/${request.goalId}/GOALS`).doc(request.goalId);
			await goalsRef.update({
				...goalsRequest,
				updatedAt: new Date().toISOString(),
			});
			
			return {
				status: 200,
				body: {
					...goalsRef,
					...goalsRequest,
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
						message: "No uid found in request",
					},
				};
			}
			return {
				status: 422,
				body: {
					message: "no goals found with given info",
				},
				
			};
		}
	}

	async delete(patientId:string,goalId: string): Promise<t.DeleteGoalsDeleteResponse> {
		try {
			await this._checkUserExists(goalId);
			const goalsRef = (await db.collectionGroup(`GOALS`).where("goalId","==",goalId).where("patientId","==",patientId).get()).docs[0].ref
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

	private async _checkUserExists(patientId: string) {
		const response = await db.collection("PATIENTS").doc(patientId).get();
		if (!response) {
			throw new Error("no-patient-found");
		}
		return response.data();
	}
}
