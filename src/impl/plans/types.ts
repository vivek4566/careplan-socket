import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/plans/types";
import * as v from "../../../dist/validation";
import { db } from "../../admin/types";
import plans from "../../../dist/api/plans";

export class PlanService {
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
	): Promise<t.GetPlansGetAllResponse> {
		try {
			const plansQuerySnap = await db.collectionGroup(`PLANS`).where("patientId","==",patientId).get();
			const plans: Api.PlansDto[] = plansQuerySnap.docs
				.map((doc: { data: () => any; }) => doc.data())
				.map((json: any) => v.modelApiPlansDtoFromJson("plans", json));
			return {
				status: 200,
				body: {
					items: plans,
					totalCount: plans.length,
				},
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async get(id: string): Promise<t.GetPlansGetResponse> {
		try {
			const plansDocSnap =   (await db.collectionGroup(`PLANS`).where("planId","==",id).get()).docs[0];
			if (!plansDocSnap.exists) {
				throw new Error("no-tasks-found");
			}
			const plans = v.modelApiTasksDtoFromJson("tasks", plansDocSnap.data());
			return {
				status: 200,
				body: plans,
			};
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("no-plans-found")) {
				return {
					status: 404,
					body: {
						message: "No plans found with given id",
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
	async create(request: Api.PlansDto | undefined): Promise<t.PostPlansCreateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}

			if (!request.patientId) {
				throw new Error("no-patientId-found");
			}

			const plansRef = db.collection(`${this.collectionName}/${request.patientId}/CAREPLAN/${request.planId}/PLANS`).doc();
			request.planId = plansRef.id
			const plansRequest = v.modelApiPlansDtoFromJson("plans", request);
			try {
				const patient = await this._checkUserExists(request.patientId);
				// console.log("ppppp",patient)
				await plansRef.set({
					...plansRequest,
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

			if (error.toString().match("plans-already-exists")) {
				return {
					status: 422,
					body: {
						message: "plans already exists with given uid",
					},
				};
			}
			throw error;
		}
	}

	async update(request: Api.PlansDto | undefined): Promise<t.PutPlansUpdateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}
			if (!request.patientId) {
				throw new Error("no-patientId-found");
			}


			if (!request.planId) {
				throw new Error("no-uId-found");
			}
			

			const plansRequest = JSON.parse(JSON.stringify(request))
			const plansRef = db.collection(`${this.collectionName}/${request.patientId}/CAREPLAN/${request.planId}/PLANS`).doc(request.planId);
			await plansRef.update({
				...plansRequest,
				updatedAt: new Date().toISOString(),
			});
			
			return {
				status: 200,
				body: {
					...plansRef,
					...plansRequest,
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
					message: "no plans found with given info",
				},
				
			};
		}
	}

	async delete(patientId:string,planId: string): Promise<t.GetPlansDeleteResponse> {
		try {
			await this._checkUserExists(planId);
			const plansRef = (await db.collectionGroup(`GOALS`).where("goalId","==",planId).where("patientId","==",patientId).get()).docs[0].ref
			await plansRef.update({
				isExist: false,
				deletedAt: new Date().toISOString(),
			});
			return {
				status: 200,
				body: {
					message: "plans deleted successfully",
				},
			};
		} catch (error: any) {
			console.error(error);
			if (error?.response?.status === 404) {
				return {
					status: 404,
					body: {
						message: "plans already deleted or no patient found",
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
