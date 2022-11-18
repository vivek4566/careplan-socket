# Goals

## Operations

### postGoalsCreate

```http
POST /goals/create
```


### getGoalsDelete

```http
GET /goals/delete
```


### getGoalsGet

```http
GET /goals/get
```


### getGoalsGetAll

```http
GET /goals/getAll
```


### putGoalsUpdate

```http
PUT /goals/update
```


## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function postGoalsCreate(request: Api.GoalsDto | undefined): Promise<t.PostGoalsCreateResponse> {
	throw 'Unimplemented'
}

async function getGoalsDelete(id: string): Promise<t.GetGoalsDeleteResponse> {
	throw 'Unimplemented'
}

async function getGoalsGet(id: string): Promise<t.GetGoalsGetResponse> {
	throw 'Unimplemented'
}

async function getGoalsGetAll(limit: number | null | undefined, direction: Api.DirectionParamEnum | undefined, sortByField: string | null | undefined): Promise<t.GetGoalsGetAllResponse> {
	throw 'Unimplemented'
}

async function putGoalsUpdate(request: Api.GoalsDto | undefined): Promise<t.PutGoalsUpdateResponse> {
	throw 'Unimplemented'
}


const api: t.GoalsApi = {
	postGoalsCreate,
	getGoalsDelete,
	getGoalsGet,
	getGoalsGetAll,
	putGoalsUpdate,
}

export default api
```
