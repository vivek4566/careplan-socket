import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/plans/types";
import * as v from "../../../dist/validation";
import { db } from "../../admin/types";

export class PlanService {
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
	): Promise<t.GetPlansGetAllResponse> {
		try {
			const plansQuerySnap = await db.collection(`${this.collectionName}`).get();
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

	async get(Id: string): Promise<t.GetPlansGetResponse> {
		try {
			const plansDocSnap = await db.doc(`${this.collectionName}/${Id}`).get();
			if (!plansDocSnap.exists) {
				throw new Error("no-plans-found");
			}
			const plans = v.modelApiPlansDtoFromJson("goals", plansDocSnap.data());
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
			throw error;
		}
	}
	async create(request: Api.PlansDto | undefined): Promise<t.PostPlansCreateResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}

			if (!request.planId) {
				throw new Error("no-planId-found");
			}

			const goalsRef = db.collection(`${this.collectionName}`).doc(request.planId);
			try {
				await this._checkUserExists(request.planId);
			} catch (error: any) {
				if (error.toString().match("no-plans-found")) {
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
			throw new Error("plans-already-exists");
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
						message: "No plans found in request",
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

			if (!request.planId) {
				throw new Error("no-uId-found");
			}

			const plansRef = db.collection(`${this.collectionName}`).doc(request.planId);

			// checking whether patients exists or not
			const plansRes = await this._checkUserExists(request.planId);
			await plansRef.update({
				...request,
				updatedAt: new Date().toISOString(),
			});
			return {
				status: 200,
				body: {
					...plansRes,
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
						message: "No uid found in request",
					},
				};
			}

			throw error;
		}
	}

	async delete(planId: string): Promise<t.GetPlansDeleteResponse> {
		try {
			await this._checkUserExists(planId);
			const plansRef = db.collection(`${this.collectionName}`).doc(planId);
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

	private async _checkUserExists(planId: string) {
		const response = await this.get(planId);
		if (response.status === 404) {
			throw new Error("no-plans-found");
		}
		return response.body;
	}
}
