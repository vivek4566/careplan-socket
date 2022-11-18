import * as t from '../api/tasks/types'
import { Api } from '../models'

async function postTasksCreate(request: Api.TasksDto | undefined): Promise<t.PostTasksCreateResponse> {
	throw 'Unimplemented'
}

async function getTasksDelete(id: string): Promise<t.GetTasksDeleteResponse> {
	throw 'Unimplemented'
}

async function getTasksGet(id: string): Promise<t.GetTasksGetResponse> {
	throw 'Unimplemented'
}

async function getTasksGetAll(limit: number | null | undefined, direction: Api.DirectionParamEnum | undefined, sortByField: string | null | undefined): Promise<t.GetTasksGetAllResponse> {
	throw 'Unimplemented'
}

async function putTasksUpdate(request: Api.TasksDto | undefined): Promise<t.PutTasksUpdateResponse> {
	throw 'Unimplemented'
}


const api: t.TasksApi = {
	postTasksCreate,
	getTasksDelete,
	getTasksGet,
	getTasksGetAll,
	putTasksUpdate,
}

export default api
