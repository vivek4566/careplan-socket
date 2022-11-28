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
import passport from 'passport'
import * as t from './types'
import * as v from '../../validation'
import { Api } from '../../models'

export default function(app: Express, impl: t.PlansApi) {
	app.post(
		'/Plans/create',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiPlansDtoFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.postPlansCreate(__body()).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiPlansDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.postPlansCreate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 401) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.postPlansCreate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(401)
						res.send(body)
						return
					}
					if (response.status === 404) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.postPlansCreate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(404)
						res.send(body)
						return
					}
					if (response.status === 422) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.postPlansCreate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(422)
						res.send(body)
						return
					}

					console.log('Unsupported response in plans.postPlansCreate', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in plans.postPlansCreate', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.get(
		'/Plans/delete',
		function (req, res) {
			try {
				impl.getPlansDelete(v.parseString('query.patientId', req.query['patientId']), v.parseString('query.Id', req.query['Id'])).then(function (response) {
					if (response.status === 200) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansDelete', error)
							res.status(500)
							res.send()
							return
						}

						res.status(200)
						res.send(body)
						return
					}
					if (response.status === 401) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansDelete', error)
							res.status(500)
							res.send()
							return
						}

						res.status(401)
						res.send(body)
						return
					}
					if (response.status === 404) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansDelete', error)
							res.status(500)
							res.send()
							return
						}

						res.status(404)
						res.send(body)
						return
					}
					if (response.status === 422) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansDelete', error)
							res.status(500)
							res.send()
							return
						}

						res.status(422)
						res.send(body)
						return
					}

					console.log('Unsupported response in plans.getPlansDelete', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in plans.getPlansDelete', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.get(
		'/Plans/get',
		function (req, res) {
			try {
				impl.getPlansGet(v.parseString('query.Id', req.query['Id'])).then(function (response) {
					if (response.status === 200) {
						let body: any
						try {
							body = v.modelApiPlansDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansGet', error)
							res.status(500)
							res.send()
							return
						}

						res.status(200)
						res.send(body)
						return
					}
					if (response.status === 401) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansGet', error)
							res.status(500)
							res.send()
							return
						}

						res.status(401)
						res.send(body)
						return
					}
					if (response.status === 404) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansGet', error)
							res.status(500)
							res.send()
							return
						}

						res.status(404)
						res.send(body)
						return
					}
					if (response.status === 422) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansGet', error)
							res.status(500)
							res.send()
							return
						}

						res.status(422)
						res.send(body)
						return
					}

					console.log('Unsupported response in plans.getPlansGet', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in plans.getPlansGet', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.get(
		'/Plans/getAll',
		function (req, res) {
			try {
				impl.getPlansGetAll(v.parseString('query.patientId', req.query['patientId']), v.allowUndefined(v.parseInteger)('query.Limit', req.query['Limit']), v.allowUndefined(v.enumApiDirectionParamEnumFromJson)('query.Direction', req.query['Direction']), v.allowUndefined(v.parseString)('query.SortByField', req.query['SortByField'])).then(function (response) {
					if (response.status === 200) {
						let body: any
						try {
							body = v.modelApiPlansPagedResultDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansGetAll', error)
							res.status(500)
							res.send()
							return
						}

						res.status(200)
						res.send(body)
						return
					}
					if (response.status === 401) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansGetAll', error)
							res.status(500)
							res.send()
							return
						}

						res.status(401)
						res.send(body)
						return
					}
					if (response.status === 404) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.getPlansGetAll', error)
							res.status(500)
							res.send()
							return
						}

						res.status(404)
						res.send(body)
						return
					}

					console.log('Unsupported response in plans.getPlansGetAll', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in plans.getPlansGetAll', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.put(
		'/Plans/update',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiPlansDtoFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.putPlansUpdate(__body()).then(function (response) {
					if (response.status === 200) {
						let body: any
						try {
							body = v.modelApiPlansDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.putPlansUpdate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(200)
						res.send(body)
						return
					}
					if (response.status === 401) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.putPlansUpdate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(401)
						res.send(body)
						return
					}
					if (response.status === 404) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.putPlansUpdate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(404)
						res.send(body)
						return
					}
					if (response.status === 422) {
						let body: any
						try {
							body = v.modelApiMessageDtoToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in plans.putPlansUpdate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(422)
						res.send(body)
						return
					}

					console.log('Unsupported response in plans.putPlansUpdate', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in plans.putPlansUpdate', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

}
