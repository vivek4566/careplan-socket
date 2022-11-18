/* eslint-disable */
// tslint:disable
/**
 * careplan service
 * 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import { Api } from '../../models'

export interface TasksApi {
	postTasksCreate: (request: Api.TasksDto | undefined) => Promise<PostTasksCreateResponse>
	getTasksDelete: (id: string) => Promise<GetTasksDeleteResponse>
	getTasksGet: (id: string) => Promise<GetTasksGetResponse>
	getTasksGetAll: (limit: number | null | undefined, direction: Api.DirectionParamEnum | undefined, sortByField: string | null | undefined) => Promise<GetTasksGetAllResponse>
	putTasksUpdate: (request: Api.TasksDto | undefined) => Promise<PutTasksUpdateResponse>
}

export type PostTasksCreateResponse = PostTasksCreate201Response | PostTasksCreate401Response | PostTasksCreate404Response | PostTasksCreate422Response

export interface PostTasksCreate201Response {
	status: 201
	body: Api.TasksDto
	headers?: never
}

export interface PostTasksCreate401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface PostTasksCreate404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface PostTasksCreate422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type GetTasksDeleteResponse = GetTasksDelete200Response | GetTasksDelete401Response | GetTasksDelete404Response | GetTasksDelete422Response

export interface GetTasksDelete200Response {
	status: 200
	body: Api.MessageDto
	headers?: never
}

export interface GetTasksDelete401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface GetTasksDelete404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface GetTasksDelete422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type GetTasksGetResponse = GetTasksGet200Response | GetTasksGet401Response | GetTasksGet404Response | GetTasksGet422Response

export interface GetTasksGet200Response {
	status: 200
	body: Api.TasksDto
	headers?: never
}

export interface GetTasksGet401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface GetTasksGet404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface GetTasksGet422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type GetTasksGetAllResponse = GetTasksGetAll200Response | GetTasksGetAll401Response | GetTasksGetAll404Response

export interface GetTasksGetAll200Response {
	status: 200
	body: Api.TasksPagedResultDto
	headers?: never
}

export interface GetTasksGetAll401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface GetTasksGetAll404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export type PutTasksUpdateResponse = PutTasksUpdate200Response | PutTasksUpdate401Response | PutTasksUpdate404Response | PutTasksUpdate422Response

export interface PutTasksUpdate200Response {
	status: 200
	body: Api.TasksDto
	headers?: never
}

export interface PutTasksUpdate401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface PutTasksUpdate404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface PutTasksUpdate422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

