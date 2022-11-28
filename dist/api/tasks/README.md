# Tasks

## Operations

### postTasksCreate

```http
POST /tasks/create
```


### getTasksDelete

```http
GET /tasks/delete
```


### getTasksGet

```http
GET /tasks/get
```


### getTasksGetAll

```http
GET /tasks/getAll
```


### putTasksUpdate

```http
PUT /tasks/update
```


## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function postTasksCreate(request: Api.TasksDto | undefined): Promise<t.PostTasksCreateResponse> {
	throw 'Unimplemented'
}

async function getTasksDelete(patientId: string, id: string): Promise<t.GetTasksDeleteResponse> {
	throw 'Unimplemented'
}

async function getTasksGet(id: string): Promise<t.GetTasksGetResponse> {
	throw 'Unimplemented'
}

async function getTasksGetAll(patientId: string, limit: number | null | undefined, direction: Api.DirectionParamEnum | undefined, sortByField: string | null | undefined): Promise<t.GetTasksGetAllResponse> {
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
```
