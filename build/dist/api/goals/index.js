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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const v = __importStar(require("../../validation"));
function default_1(app, impl) {
    app.post('/goals/create', function (req, res) {
        try {
            function __body() {
                const __contentType = req.get('Content-Type');
                const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined;
                if (__mimeType === 'application/json') {
                    return v.modelApiGoalsDtoFromJson('body', req.body);
                }
                console.error(`Invalid request content type: ${__contentType}`);
                throw new Error(`Invalid request content type: ${__contentType}`);
            }
            impl.postGoalsCreate(__body()).then(function (response) {
                if (response.status === 201) {
                    let body;
                    try {
                        body = v.modelApiGoalsDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.postGoalsCreate', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(201);
                    res.send(body);
                    return;
                }
                if (response.status === 401) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.postGoalsCreate', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(401);
                    res.send(body);
                    return;
                }
                if (response.status === 404) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.postGoalsCreate', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(404);
                    res.send(body);
                    return;
                }
                if (response.status === 422) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.postGoalsCreate', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(422);
                    res.send(body);
                    return;
                }
                console.log('Unsupported response in goals.postGoalsCreate', response);
                res.status(500);
                res.send();
            }).catch(function (error) {
                console.error('Unexpected error in goals.postGoalsCreate', error.stack || error);
                res.status(500);
                res.send();
            });
        }
        catch (error) {
            /* Catch validation errors */
            res.status(400);
            res.send(error);
        }
    });
    app.get('/goals/delete', function (req, res) {
        try {
            impl.getGoalsDelete(v.parseString('query.Id', req.query['Id'])).then(function (response) {
                if (response.status === 200) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsDelete', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(200);
                    res.send(body);
                    return;
                }
                if (response.status === 401) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsDelete', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(401);
                    res.send(body);
                    return;
                }
                if (response.status === 404) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsDelete', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(404);
                    res.send(body);
                    return;
                }
                if (response.status === 422) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsDelete', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(422);
                    res.send(body);
                    return;
                }
                console.log('Unsupported response in goals.getGoalsDelete', response);
                res.status(500);
                res.send();
            }).catch(function (error) {
                console.error('Unexpected error in goals.getGoalsDelete', error.stack || error);
                res.status(500);
                res.send();
            });
        }
        catch (error) {
            /* Catch validation errors */
            res.status(400);
            res.send(error);
        }
    });
    app.get('/goals/get', function (req, res) {
        try {
            impl.getGoalsGet(v.parseString('query.Id', req.query['Id'])).then(function (response) {
                if (response.status === 200) {
                    let body;
                    try {
                        body = v.modelApiGoalsDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsGet', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(200);
                    res.send(body);
                    return;
                }
                if (response.status === 401) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsGet', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(401);
                    res.send(body);
                    return;
                }
                if (response.status === 404) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsGet', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(404);
                    res.send(body);
                    return;
                }
                if (response.status === 422) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsGet', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(422);
                    res.send(body);
                    return;
                }
                console.log('Unsupported response in goals.getGoalsGet', response);
                res.status(500);
                res.send();
            }).catch(function (error) {
                console.error('Unexpected error in goals.getGoalsGet', error.stack || error);
                res.status(500);
                res.send();
            });
        }
        catch (error) {
            /* Catch validation errors */
            res.status(400);
            res.send(error);
        }
    });
    app.get('/goals/getAll', function (req, res) {
        try {
            impl.getGoalsGetAll(v.allowUndefined(v.parseInteger)('query.Limit', req.query['Limit']), v.allowUndefined(v.enumApiDirectionParamEnumFromJson)('query.Direction', req.query['Direction']), v.allowUndefined(v.parseString)('query.SortByField', req.query['SortByField'])).then(function (response) {
                if (response.status === 200) {
                    let body;
                    try {
                        body = v.modelApiGoalsPagedResultDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsGetAll', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(200);
                    res.send(body);
                    return;
                }
                if (response.status === 401) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsGetAll', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(401);
                    res.send(body);
                    return;
                }
                if (response.status === 404) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.getGoalsGetAll', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(404);
                    res.send(body);
                    return;
                }
                console.log('Unsupported response in goals.getGoalsGetAll', response);
                res.status(500);
                res.send();
            }).catch(function (error) {
                console.error('Unexpected error in goals.getGoalsGetAll', error.stack || error);
                res.status(500);
                res.send();
            });
        }
        catch (error) {
            /* Catch validation errors */
            res.status(400);
            res.send(error);
        }
    });
    app.put('/goals/update', function (req, res) {
        try {
            function __body() {
                const __contentType = req.get('Content-Type');
                const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined;
                if (__mimeType === 'application/json') {
                    return v.modelApiGoalsDtoFromJson('body', req.body);
                }
                console.error(`Invalid request content type: ${__contentType}`);
                throw new Error(`Invalid request content type: ${__contentType}`);
            }
            impl.putGoalsUpdate(__body()).then(function (response) {
                if (response.status === 200) {
                    let body;
                    try {
                        body = v.modelApiGoalsDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.putGoalsUpdate', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(200);
                    res.send(body);
                    return;
                }
                if (response.status === 401) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.putGoalsUpdate', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(401);
                    res.send(body);
                    return;
                }
                if (response.status === 404) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.putGoalsUpdate', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(404);
                    res.send(body);
                    return;
                }
                if (response.status === 422) {
                    let body;
                    try {
                        body = v.modelApiMessageDtoToJson('response', response.body);
                    }
                    catch (error) {
                        console.error('Invalid response body in goals.putGoalsUpdate', error);
                        res.status(500);
                        res.send();
                        return;
                    }
                    res.status(422);
                    res.send(body);
                    return;
                }
                console.log('Unsupported response in goals.putGoalsUpdate', response);
                res.status(500);
                res.send();
            }).catch(function (error) {
                console.error('Unexpected error in goals.putGoalsUpdate', error.stack || error);
                res.status(500);
                res.send();
            });
        }
        catch (error) {
            /* Catch validation errors */
            res.status(400);
            res.send(error);
        }
    });
}
exports.default = default_1;
