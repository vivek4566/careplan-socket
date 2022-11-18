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

export namespace Api {
	export enum DirectionParamEnum {
		Asc = 'asc',
		Desc = 'desc'
	}

	export interface GoalsDto {
		createdAt?: string;
		goalId?: string;
		goalName?: string;
		goalPriority?: string;
		goalStartDate?: string;
		goalTargetDate?: string;
		isExist?: boolean;
		patientId?: string;
		planId?: string;
	}

	export interface GoalsPagedResultDto {
		/**
		 * @type {number}
		 * @memberof GoalsPagedResultDto
		 */
		totalCount?: number;
		items?: Api.GoalsDto[];
	}

	export interface MessageDto {
		message: string;
	}

	export interface PlansDto {
		/**
		 * @type {number}
		 * @memberof PlansDto
		 */
		careplanNumber?: number;
		createdAt?: string;
		dueDate?: string;
		isExist?: boolean;
		patientId?: string;
		planName?: string;
		planId?: string;
		priority?: string;
		startDate?: string;
		status?: string;
		taskCreator?: string;
	}

	export interface PlansPagedResultDto {
		/**
		 * @type {number}
		 * @memberof PlansPagedResultDto
		 */
		totalCount?: number;
		items?: Api.PlansDto[];
	}

	export interface TasksDto {
		assigneeTask?: string;
		createdAt?: string;
		descriptionTask?: string;
		goalId?: string;
		isExist?: boolean;
		planId?: string;
		priorityTask?: string;
		statusTask?: string;
		subjectTask?: string;
		targetDateTask?: string;
		taskid?: string;
		typeTask?: string;
		valueTask?: string;
	}

	export interface TasksPagedResultDto {
		/**
		 * @type {number}
		 * @memberof TasksPagedResultDto
		 */
		totalCount?: number;
		items?: Api.TasksDto[];
	}

}