# Plans

## Operations

### postPlansCreate

```http
POST /Plans/create
```


### getPlansDelete

```http
GET /Plans/delete
```


### getPlansGet

```http
GET /Plans/get
```


### getPlansGetAll

```http
GET /Plans/getAll
```


### putPlansUpdate

```http
PUT /Plans/update
```


## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function postPlansCreate(request: Api.PlansDto | undefined): Promise<t.PostPlansCreateResponse> {
	throw 'Unimplemented'
}

async function getPlansDelete(patientId: string, id: string): Promise<t.GetPlansDeleteResponse> {
	throw 'Unimplemented'
}

async function getPlansGet(id: string): Promise<t.GetPlansGetResponse> {
	throw 'Unimplemented'
}

async function getPlansGetAll(patientId: string, limit: number | null | undefined, direction: Api.DirectionParamEnum | undefined, sortByField: string | null | undefined): Promise<t.GetPlansGetAllResponse> {
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
```
