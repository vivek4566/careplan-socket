import * as t from '../api/goals/types'
import { Api } from '../models'

async function postGoalsCreate(request: Api.GoalsDto | undefined): Promise<t.PostGoalsCreateResponse> {
	throw 'Unimplemented'
}

async function deleteGoalsDelete(patientId: string, id: string): Promise<t.DeleteGoalsDeleteResponse> {
	throw 'Unimplemented'
}

async function getGoalsGet(id: string): Promise<t.GetGoalsGetResponse> {
	throw 'Unimplemented'
}

async function getGoalsGetAll(patientId: string, limit: number | null | undefined, direction: Api.DirectionParamEnum | undefined, sortByField: string | null | undefined): Promise<t.GetGoalsGetAllResponse> {
	throw 'Unimplemented'
}

async function putGoalsUpdate(request: Api.GoalsDto | undefined): Promise<t.PutGoalsUpdateResponse> {
	throw 'Unimplemented'
}


const api: t.GoalsApi = {
	postGoalsCreate,
	deleteGoalsDelete,
	getGoalsGet,
	getGoalsGetAll,
	putGoalsUpdate,
}

export default api
