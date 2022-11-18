import * as t from '../api/plans/types'
import { Api } from '../models'

async function postPlansCreate(request: Api.PlansDto | undefined): Promise<t.PostPlansCreateResponse> {
	throw 'Unimplemented'
}

async function getPlansDelete(id: string): Promise<t.GetPlansDeleteResponse> {
	throw 'Unimplemented'
}

async function getPlansGet(id: string): Promise<t.GetPlansGetResponse> {
	throw 'Unimplemented'
}

async function getPlansGetAll(limit: number | null | undefined, direction: Api.DirectionParamEnum | undefined, sortByField: string | null | undefined): Promise<t.GetPlansGetAllResponse> {
	throw 'Unimplemented'
}

async function putPlansUpdate(request: Api.PlansDto | undefined): Promise<t.PutPlansUpdateResponse> {
	throw 'Unimplemented'
}


const api: t.PlansApi = {
	postPlansCreate,
	getPlansDelete,
	getPlansGet,
	getPlansGetAll,
	putPlansUpdate,
}

export default api
