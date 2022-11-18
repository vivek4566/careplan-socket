import { PlanService } from "./types";
import * as t from "../../../dist/api/plans/types";

const service = new PlanService();

export const planServiceImpl: t.PlansApi = {
	postPlansCreate: service.create,
	getPlansDelete: service.delete,
	getPlansGet: service.get,
	getPlansGetAll: service.getAll,
	putPlansUpdate: service.update,
};
