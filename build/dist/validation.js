"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelApiTasksPagedResultDtoToJson = exports.modelApiTasksPagedResultDtoFromJson = exports.modelApiTasksDtoToJson = exports.modelApiTasksDtoFromJson = exports.modelApiPlansPagedResultDtoToJson = exports.modelApiPlansPagedResultDtoFromJson = exports.modelApiPlansDtoToJson = exports.modelApiPlansDtoFromJson = exports.modelApiMessageDtoToJson = exports.modelApiMessageDtoFromJson = exports.modelApiGoalsPagedResultDtoToJson = exports.modelApiGoalsPagedResultDtoFromJson = exports.modelApiGoalsDtoToJson = exports.modelApiGoalsDtoFromJson = exports.enumApiDirectionParamEnumToJson = exports.enumApiDirectionParamEnumFromJson = exports.timeToJson = exports.parseTime = exports.timeFromJson = exports.dateTimeToJson = exports.parseDateTime = exports.dateTimeFromJson = exports.dateToJson = exports.parseDate = exports.dateFromJson = exports.parseNumber = exports.numberToJson = exports.numberFromJson = exports.parseInteger = exports.integerToJson = exports.integerFromJson = exports.parseString = exports.binaryToJson = exports.binaryFromJson = exports.stringToJson = exports.stringFromJson = exports.parseBoolean = exports.booleanToJson = exports.booleanFromJson = exports.parseUnsupported = exports.unsupportedToJson = exports.unsupportedFromJson = exports.allowNullOrUndefined = exports.allowUndefined = exports.allowNull = exports.mapToJson = exports.mapFromJson = exports.arrayToJson = exports.arrayFromJson = void 0;
const models_1 = require("./models");
function arrayFromJson(next) {
    return function (name, value) {
        if (typeof value !== 'object' || typeof value.length !== 'number') {
            throw `Invalid type for ${name}: expected array got ${typeof value}`;
        }
        const result = [];
        for (const el of value) {
            result.push(next(name, el));
        }
        return result;
    };
}
exports.arrayFromJson = arrayFromJson;
function arrayToJson(next) {
    return arrayFromJson(next);
}
exports.arrayToJson = arrayToJson;
function mapFromJson(next) {
    return function (name, value) {
        if (typeof value !== 'object') {
            throw `Invalid type for ${name}: expected object got ${typeof value}`;
        }
        const result = {};
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                result[key] = next(name, value[key]);
            }
        }
        return result;
    };
}
exports.mapFromJson = mapFromJson;
function mapToJson(next) {
    return mapFromJson(next);
}
exports.mapToJson = mapToJson;
function allowNull(next) {
    return function (name, value) {
        if (value === null) {
            return null;
        }
        return next(name, value);
    };
}
exports.allowNull = allowNull;
function allowUndefined(next) {
    return function (name, value) {
        if (value === undefined) {
            return undefined;
        }
        return next(name, value);
    };
}
exports.allowUndefined = allowUndefined;
function allowNullOrUndefined(next) {
    return function (name, value) {
        if (value === null) {
            return null;
        }
        if (value === undefined) {
            return undefined;
        }
        return next(name, value);
    };
}
exports.allowNullOrUndefined = allowNullOrUndefined;
function unsupportedFromJson(name, value) {
    if (value === undefined) {
        throw `Invalid type for ${name}: expected unknown got undefined`;
    }
    return value;
}
exports.unsupportedFromJson = unsupportedFromJson;
function unsupportedToJson(name, value) {
    return unsupportedFromJson(name, value);
}
exports.unsupportedToJson = unsupportedToJson;
function parseUnsupported(name, value) {
    if (value === undefined) {
        throw `Invalid value for ${name}: expected unknown got undefined`;
    }
    return value;
}
exports.parseUnsupported = parseUnsupported;
function booleanFromJson(name, value) {
    if (typeof value !== 'boolean') {
        throw `Invalid type for ${name}: expected boolean got ${typeof value}`;
    }
    return value;
}
exports.booleanFromJson = booleanFromJson;
function booleanToJson(name, value) {
    return booleanFromJson(name, value);
}
exports.booleanToJson = booleanToJson;
function parseBoolean(name, value) {
    if (value === 'true') {
        return true;
    }
    else if (value === 'false') {
        return false;
    }
    else {
        throw `Invalid value for ${name}: expected boolean got "${value}"`;
    }
}
exports.parseBoolean = parseBoolean;
function stringFromJson(name, value) {
    if (typeof value !== 'string') {
        throw `Invalid type for ${name}: expected string got ${typeof value}`;
    }
    return value;
}
exports.stringFromJson = stringFromJson;
function stringToJson(name, value) {
    return stringFromJson(name, value);
}
exports.stringToJson = stringToJson;
function binaryFromJson(name, value) {
    if (typeof value !== 'string') {
        throw `Invalid type for ${name}: expected string got ${typeof value}`;
    }
    return new Buffer(value, 'base64');
}
exports.binaryFromJson = binaryFromJson;
function binaryToJson(name, value) {
    if (typeof value === 'string') {
        return value;
    }
    else {
        return value.toString('base64');
    }
}
exports.binaryToJson = binaryToJson;
function parseString(name, value) {
    if (value === undefined) {
        throw `Invalid value for ${name}: expected string got undefined`;
    }
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'object' && typeof value.length === 'number') {
        if (value.length > 0) {
            return value[0];
        }
    }
    throw `Invalid value for ${name}: expected string got ${typeof value}`;
}
exports.parseString = parseString;
function integerFromJson(name, value) {
    if (typeof value !== 'number') {
        throw `Invalid type for ${name}: expected number got ${typeof value}`;
    }
    if (isNaN(value)) {
        throw `Invalid NaN for ${name}`;
    }
    if (Math.floor(value) !== value) {
        throw `Invalid value for ${name}: expected integer got "${value}"`;
    }
    return value;
}
exports.integerFromJson = integerFromJson;
function integerToJson(name, value) {
    return integerFromJson(name, value);
}
exports.integerToJson = integerToJson;
function parseInteger(name, value) {
    if (typeof value === 'object' && typeof value.length === 'number' && value.length > 0) {
        value = value[0];
    }
    if (typeof value === 'string') {
        if (value.indexOf('.') !== -1) {
            throw `Invalid value for ${name}: expected integer got "${value}"`;
        }
        const result = parseInt(value, 10);
        if (isNaN(result)) {
            throw `Invalid value for ${name}: expected integer got "${value}"`;
        }
        return result;
    }
    throw `Invalid value for ${name}: expected integer got ${typeof value}`;
}
exports.parseInteger = parseInteger;
function numberFromJson(name, value) {
    if (typeof value !== 'number') {
        throw `Invalid type for ${name}: expected number got ${typeof value}`;
    }
    if (isNaN(value)) {
        throw `Invalid NaN for ${name}`;
    }
    return value;
}
exports.numberFromJson = numberFromJson;
function numberToJson(name, value) {
    return numberFromJson(name, value);
}
exports.numberToJson = numberToJson;
function parseNumber(name, value) {
    if (typeof value === 'object' && typeof value.length === 'number' && value.length > 0) {
        value = value[0];
    }
    if (typeof value === 'string') {
        const result = parseFloat(value);
        if (isNaN(result)) {
            throw `Invalid value for ${name}: expected float got "${value}"`;
        }
        return result;
    }
    throw `Invalid value for ${name}: expected number got ${typeof value}`;
}
exports.parseNumber = parseNumber;
function dateFromJson(name, value) {
    if (typeof value !== 'string') {
        throw `Invalid type for ${name}: expected string got ${typeof value}`;
    }
    if (!value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
        throw `Invalid value for ${name}: expected valid date string got "${value}"`;
    }
    return value;
}
exports.dateFromJson = dateFromJson;
function parseDate(name, value) {
    return dateFromJson(name, value);
}
exports.parseDate = parseDate;
function dateToJson(name, value) {
    return dateFromJson(name, value);
}
exports.dateToJson = dateToJson;
function dateTimeFromJson(name, value) {
    if (typeof value !== 'string') {
        throw `Invalid type for ${name}: expected string got ${typeof value}`;
    }
    if (!value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]+)?)?(Z|(\+|-)[0-9]{2}(:?[0-9]{2})?)$/)) {
        throw `Invalid value for ${name}: expected valid datetime string got "${value}"`;
    }
    return new Date(value);
}
exports.dateTimeFromJson = dateTimeFromJson;
function parseDateTime(name, value) {
    return dateTimeFromJson(name, value);
}
exports.parseDateTime = parseDateTime;
function dateTimeToJson(name, value) {
    if (typeof value !== 'object' || typeof value.toISOString !== 'function') {
        throw `Invalid type for ${name}: expected Date got ${typeof value}`;
    }
    return value.toISOString();
}
exports.dateTimeToJson = dateTimeToJson;
function timeFromJson(name, value) {
    if (typeof value !== 'string') {
        throw `Invalid type for ${name}: expected string got ${typeof value}`;
    }
    if (!value.match(/^[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]+)?)?$/)) {
        throw `Invalid value for ${name}: expected valid time string got "${value}"`;
    }
    return value;
}
exports.timeFromJson = timeFromJson;
function parseTime(name, value) {
    return timeFromJson(name, value);
}
exports.parseTime = parseTime;
function timeToJson(name, value) {
    return timeFromJson(name, value);
}
exports.timeToJson = timeToJson;
/* Model conversion functions */
function enumApiDirectionParamEnumFromJson(name, value) {
    if (typeof value !== 'string' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected string got ${typeof value}`;
    }
    if (value === 'asc') {
        return models_1.Api.DirectionParamEnum.Asc;
    }
    if (value === 'desc') {
        return models_1.Api.DirectionParamEnum.Desc;
    }
    throw `Unexpected enum value for Api.DirectionParamEnum: ${value}`;
}
exports.enumApiDirectionParamEnumFromJson = enumApiDirectionParamEnumFromJson;
function enumApiDirectionParamEnumToJson(name, value) {
    if (typeof value !== 'string' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected string got ${typeof value}`;
    }
    if (value === 'asc') {
        return models_1.Api.DirectionParamEnum.Asc;
    }
    if (value === 'desc') {
        return models_1.Api.DirectionParamEnum.Desc;
    }
    throw `Unexpected enum value for Api.DirectionParamEnum: ${value}`;
}
exports.enumApiDirectionParamEnumToJson = enumApiDirectionParamEnumToJson;
const ApiGoalsDtoKeys = ['createdAt', 'goalId', 'goalName', 'goalPriority', 'goalStartDate', 'goalTargetDate', 'isExist', 'patientId', 'planId'];
function modelApiGoalsDtoFromJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiGoalsDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'createdAt': allowUndefined(stringFromJson)(`${name}.createdAt`, value['createdAt']),
        'goalId': allowUndefined(stringFromJson)(`${name}.goalId`, value['goalId']),
        'goalName': allowUndefined(stringFromJson)(`${name}.goalName`, value['goalName']),
        'goalPriority': allowUndefined(stringFromJson)(`${name}.goalPriority`, value['goalPriority']),
        'goalStartDate': allowUndefined(stringFromJson)(`${name}.goalStartDate`, value['goalStartDate']),
        'goalTargetDate': allowUndefined(stringFromJson)(`${name}.goalTargetDate`, value['goalTargetDate']),
        'isExist': allowUndefined(booleanFromJson)(`${name}.isExist`, value['isExist']),
        'patientId': allowUndefined(stringFromJson)(`${name}.patientId`, value['patientId']),
        'planId': allowUndefined(stringFromJson)(`${name}.planId`, value['planId']),
    };
    return result;
}
function modelApiGoalsDtoToJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiGoalsDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'createdAt': allowUndefined(stringToJson)(`${name}.createdAt`, value['createdAt']),
        'goalId': allowUndefined(stringToJson)(`${name}.goalId`, value['goalId']),
        'goalName': allowUndefined(stringToJson)(`${name}.goalName`, value['goalName']),
        'goalPriority': allowUndefined(stringToJson)(`${name}.goalPriority`, value['goalPriority']),
        'goalStartDate': allowUndefined(stringToJson)(`${name}.goalStartDate`, value['goalStartDate']),
        'goalTargetDate': allowUndefined(stringToJson)(`${name}.goalTargetDate`, value['goalTargetDate']),
        'isExist': allowUndefined(booleanToJson)(`${name}.isExist`, value['isExist']),
        'patientId': allowUndefined(stringToJson)(`${name}.patientId`, value['patientId']),
        'planId': allowUndefined(stringToJson)(`${name}.planId`, value['planId']),
    };
    return result;
}
function modelApiGoalsDtoFromJson(name, value) {
    const knownKeys = {};
    const result = modelApiGoalsDtoFromJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.GoalsDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiGoalsDtoFromJson = modelApiGoalsDtoFromJson;
function modelApiGoalsDtoToJson(name, value) {
    const knownKeys = {};
    const result = modelApiGoalsDtoToJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.GoalsDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiGoalsDtoToJson = modelApiGoalsDtoToJson;
const ApiGoalsPagedResultDtoKeys = ['totalCount', 'items'];
function modelApiGoalsPagedResultDtoFromJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiGoalsPagedResultDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'totalCount': allowUndefined(integerFromJson)(`${name}.totalCount`, value['totalCount']),
        'items': allowUndefined(arrayFromJson(modelApiGoalsDtoFromJson))(`${name}.items`, value['items']),
    };
    return result;
}
function modelApiGoalsPagedResultDtoToJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiGoalsPagedResultDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'totalCount': allowUndefined(integerToJson)(`${name}.totalCount`, value['totalCount']),
        'items': allowUndefined(arrayToJson(modelApiGoalsDtoToJson))(`${name}.items`, value['items']),
    };
    return result;
}
function modelApiGoalsPagedResultDtoFromJson(name, value) {
    const knownKeys = {};
    const result = modelApiGoalsPagedResultDtoFromJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.GoalsPagedResultDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiGoalsPagedResultDtoFromJson = modelApiGoalsPagedResultDtoFromJson;
function modelApiGoalsPagedResultDtoToJson(name, value) {
    const knownKeys = {};
    const result = modelApiGoalsPagedResultDtoToJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.GoalsPagedResultDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiGoalsPagedResultDtoToJson = modelApiGoalsPagedResultDtoToJson;
const ApiMessageDtoKeys = ['message'];
function modelApiMessageDtoFromJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiMessageDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'message': stringFromJson(`${name}.message`, value['message']),
    };
    return result;
}
function modelApiMessageDtoToJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiMessageDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'message': stringToJson(`${name}.message`, value['message']),
    };
    return result;
}
function modelApiMessageDtoFromJson(name, value) {
    const knownKeys = {};
    const result = modelApiMessageDtoFromJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.MessageDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiMessageDtoFromJson = modelApiMessageDtoFromJson;
function modelApiMessageDtoToJson(name, value) {
    const knownKeys = {};
    const result = modelApiMessageDtoToJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.MessageDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiMessageDtoToJson = modelApiMessageDtoToJson;
const ApiPlansDtoKeys = ['careplanNumber', 'createdAt', 'dueDate', 'isExist', 'patientId', 'planName', 'planId', 'priority', 'startDate', 'status', 'taskCreator'];
function modelApiPlansDtoFromJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiPlansDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'careplanNumber': allowUndefined(numberFromJson)(`${name}.careplanNumber`, value['careplanNumber']),
        'createdAt': allowUndefined(stringFromJson)(`${name}.createdAt`, value['createdAt']),
        'dueDate': allowUndefined(stringFromJson)(`${name}.dueDate`, value['dueDate']),
        'isExist': allowUndefined(booleanFromJson)(`${name}.isExist`, value['isExist']),
        'patientId': allowUndefined(stringFromJson)(`${name}.patientId`, value['patientId']),
        'planName': allowUndefined(stringFromJson)(`${name}.planName`, value['planName']),
        'planId': allowUndefined(stringFromJson)(`${name}.planId`, value['planId']),
        'priority': allowUndefined(stringFromJson)(`${name}.priority`, value['priority']),
        'startDate': allowUndefined(stringFromJson)(`${name}.startDate`, value['startDate']),
        'status': allowUndefined(stringFromJson)(`${name}.status`, value['status']),
        'taskCreator': allowUndefined(stringFromJson)(`${name}.taskCreator`, value['taskCreator']),
    };
    return result;
}
function modelApiPlansDtoToJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiPlansDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'careplanNumber': allowUndefined(numberToJson)(`${name}.careplanNumber`, value['careplanNumber']),
        'createdAt': allowUndefined(stringToJson)(`${name}.createdAt`, value['createdAt']),
        'dueDate': allowUndefined(stringToJson)(`${name}.dueDate`, value['dueDate']),
        'isExist': allowUndefined(booleanToJson)(`${name}.isExist`, value['isExist']),
        'patientId': allowUndefined(stringToJson)(`${name}.patientId`, value['patientId']),
        'planName': allowUndefined(stringToJson)(`${name}.planName`, value['planName']),
        'planId': allowUndefined(stringToJson)(`${name}.planId`, value['planId']),
        'priority': allowUndefined(stringToJson)(`${name}.priority`, value['priority']),
        'startDate': allowUndefined(stringToJson)(`${name}.startDate`, value['startDate']),
        'status': allowUndefined(stringToJson)(`${name}.status`, value['status']),
        'taskCreator': allowUndefined(stringToJson)(`${name}.taskCreator`, value['taskCreator']),
    };
    return result;
}
function modelApiPlansDtoFromJson(name, value) {
    const knownKeys = {};
    const result = modelApiPlansDtoFromJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.PlansDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiPlansDtoFromJson = modelApiPlansDtoFromJson;
function modelApiPlansDtoToJson(name, value) {
    const knownKeys = {};
    const result = modelApiPlansDtoToJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.PlansDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiPlansDtoToJson = modelApiPlansDtoToJson;
const ApiPlansPagedResultDtoKeys = ['totalCount', 'items'];
function modelApiPlansPagedResultDtoFromJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiPlansPagedResultDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'totalCount': allowUndefined(integerFromJson)(`${name}.totalCount`, value['totalCount']),
        'items': allowUndefined(arrayFromJson(modelApiPlansDtoFromJson))(`${name}.items`, value['items']),
    };
    return result;
}
function modelApiPlansPagedResultDtoToJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiPlansPagedResultDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'totalCount': allowUndefined(integerToJson)(`${name}.totalCount`, value['totalCount']),
        'items': allowUndefined(arrayToJson(modelApiPlansDtoToJson))(`${name}.items`, value['items']),
    };
    return result;
}
function modelApiPlansPagedResultDtoFromJson(name, value) {
    const knownKeys = {};
    const result = modelApiPlansPagedResultDtoFromJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.PlansPagedResultDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiPlansPagedResultDtoFromJson = modelApiPlansPagedResultDtoFromJson;
function modelApiPlansPagedResultDtoToJson(name, value) {
    const knownKeys = {};
    const result = modelApiPlansPagedResultDtoToJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.PlansPagedResultDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiPlansPagedResultDtoToJson = modelApiPlansPagedResultDtoToJson;
const ApiTasksDtoKeys = ['assigneeTask', 'createdAt', 'descriptionTask', 'goalId', 'isExist', 'planId', 'priorityTask', 'statusTask', 'subjectTask', 'targetDateTask', 'taskid', 'typeTask', 'valueTask'];
function modelApiTasksDtoFromJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiTasksDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'assigneeTask': allowUndefined(stringFromJson)(`${name}.assigneeTask`, value['assigneeTask']),
        'createdAt': allowUndefined(stringFromJson)(`${name}.createdAt`, value['createdAt']),
        'descriptionTask': allowUndefined(stringFromJson)(`${name}.descriptionTask`, value['descriptionTask']),
        'goalId': allowUndefined(stringFromJson)(`${name}.goalId`, value['goalId']),
        'isExist': allowUndefined(booleanFromJson)(`${name}.isExist`, value['isExist']),
        'planId': allowUndefined(stringFromJson)(`${name}.planId`, value['planId']),
        'priorityTask': allowUndefined(stringFromJson)(`${name}.priorityTask`, value['priorityTask']),
        'statusTask': allowUndefined(stringFromJson)(`${name}.statusTask`, value['statusTask']),
        'subjectTask': allowUndefined(stringFromJson)(`${name}.subjectTask`, value['subjectTask']),
        'targetDateTask': allowUndefined(stringFromJson)(`${name}.targetDateTask`, value['targetDateTask']),
        'taskid': allowUndefined(stringFromJson)(`${name}.taskid`, value['taskid']),
        'typeTask': allowUndefined(stringFromJson)(`${name}.typeTask`, value['typeTask']),
        'valueTask': allowUndefined(stringFromJson)(`${name}.valueTask`, value['valueTask']),
    };
    return result;
}
function modelApiTasksDtoToJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiTasksDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'assigneeTask': allowUndefined(stringToJson)(`${name}.assigneeTask`, value['assigneeTask']),
        'createdAt': allowUndefined(stringToJson)(`${name}.createdAt`, value['createdAt']),
        'descriptionTask': allowUndefined(stringToJson)(`${name}.descriptionTask`, value['descriptionTask']),
        'goalId': allowUndefined(stringToJson)(`${name}.goalId`, value['goalId']),
        'isExist': allowUndefined(booleanToJson)(`${name}.isExist`, value['isExist']),
        'planId': allowUndefined(stringToJson)(`${name}.planId`, value['planId']),
        'priorityTask': allowUndefined(stringToJson)(`${name}.priorityTask`, value['priorityTask']),
        'statusTask': allowUndefined(stringToJson)(`${name}.statusTask`, value['statusTask']),
        'subjectTask': allowUndefined(stringToJson)(`${name}.subjectTask`, value['subjectTask']),
        'targetDateTask': allowUndefined(stringToJson)(`${name}.targetDateTask`, value['targetDateTask']),
        'taskid': allowUndefined(stringToJson)(`${name}.taskid`, value['taskid']),
        'typeTask': allowUndefined(stringToJson)(`${name}.typeTask`, value['typeTask']),
        'valueTask': allowUndefined(stringToJson)(`${name}.valueTask`, value['valueTask']),
    };
    return result;
}
function modelApiTasksDtoFromJson(name, value) {
    const knownKeys = {};
    const result = modelApiTasksDtoFromJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.TasksDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiTasksDtoFromJson = modelApiTasksDtoFromJson;
function modelApiTasksDtoToJson(name, value) {
    const knownKeys = {};
    const result = modelApiTasksDtoToJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.TasksDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiTasksDtoToJson = modelApiTasksDtoToJson;
const ApiTasksPagedResultDtoKeys = ['totalCount', 'items'];
function modelApiTasksPagedResultDtoFromJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiTasksPagedResultDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'totalCount': allowUndefined(integerFromJson)(`${name}.totalCount`, value['totalCount']),
        'items': allowUndefined(arrayFromJson(modelApiTasksDtoFromJson))(`${name}.items`, value['items']),
    };
    return result;
}
function modelApiTasksPagedResultDtoToJsonContent(name, value, knownKeys = {}) {
    if (typeof value !== 'object' || value === undefined || value === null) {
        throw `Invalid type for ${name}: expected object got ${typeof value}`;
    }
    ApiTasksPagedResultDtoKeys.forEach(k => knownKeys[k] = true);
    const result = {
        'totalCount': allowUndefined(integerToJson)(`${name}.totalCount`, value['totalCount']),
        'items': allowUndefined(arrayToJson(modelApiTasksDtoToJson))(`${name}.items`, value['items']),
    };
    return result;
}
function modelApiTasksPagedResultDtoFromJson(name, value) {
    const knownKeys = {};
    const result = modelApiTasksPagedResultDtoFromJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.TasksPagedResultDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiTasksPagedResultDtoFromJson = modelApiTasksPagedResultDtoFromJson;
function modelApiTasksPagedResultDtoToJson(name, value) {
    const knownKeys = {};
    const result = modelApiTasksPagedResultDtoToJsonContent(name, value, knownKeys);
    /* Known keys */
    // TODO if we don't ignore unknown properties
    for (const key of Object.keys(value)) {
        if (!knownKeys[key]) {
            // throw `Unexpected key: ${key}`
            console.warn(`Unexpected key in Api.TasksPagedResultDto: ${key}`);
        }
    }
    return result;
}
exports.modelApiTasksPagedResultDtoToJson = modelApiTasksPagedResultDtoToJson;