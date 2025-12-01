# @nayotta/errors

[![Lint and Build](https://github.com/nayotta/js-errors/actions/workflows/lint-build.yml/badge.svg)](https://github.com/nayotta/js-errors/actions/workflows/lint-build.yml)[![Node.js Package](https://github.com/nayotta/js-errors/actions/workflows/release.yml/badge.svg)](https://github.com/nayotta/js-errors/actions/workflows/release.yml)

> common business errors

## install

```shell
$ npm install @nayotta/errors --save
```

## use

```js
// COMMONJS
const {
	ToBeDoneError,
	errors,
	JsError
} = require('@nayotta/errors')
// ESM
import {
	ToBeDoneError,
	errors,
	JsError
} from '@nayotta/errors'

async function do () {
	throw new errors.ToBeDoneError('function do')
}

async function run () {
	const res = await do().catch(err => err)
	if (res instanceof Error) {
		if (errors.isToBeDoneError(res)) {
			console.log(res.name) // TBD_ERROR
			console.log(res.message) // TBD: function a
			console.log(res.code) // 403
			console.log(res)
			return
		}
		throw res
	}
}

// custom errors
const TEST_ERROR_NAME = 'TEST_ERROR'
class TestError extends Error {
	public readonly name: string = TEST_ERROR_NAME
	public readonly code: number = 400
	public message: string = 'test'
	constructor (message?: string) {
		super()
		this.message += `: ${message}`
	}
}

function isTestError (err: Error) {
	return errors.isError(err, { name: TEST_ERROR_NAME })
}

async function doSomethingCustom () {
	throw new TestError('do something custom')
}

async function runCustomErr () {
	const res = await doSomethingCustom().catch(err => err)
	if (res instanceof Error) {
		if (isTestError(res)) {
			console.log(res.name) // TEST_ERROR
			console.log(res.message) // echo: do something custom
			console.log(res.code) // 400
			console.log(res)
			return
		}
		throw res
	}
}
```

### errors

#### UnauthorizationError

- name: `UNAUTHORIZATION_ERROR`
- code: `401`
- message: `unauthorization: <message>`

#### NotFoundError

- name: `NOT_FOUND_ERROR`
- code: `404`
- message: `not found: <name>`

#### ResourceNotFoundError

- name: `RESOURCE_NOT_FOUND_ERROR`
- code: `404`
- message: `resource not found: <resource>:<name> not found`

#### ResourceAlreadyExistedError

- name: `RESOURCE_ALREADY_EXISTED_ERROR`
- code: `400`
- message: `resource already existed: <resource>:<name> already existed`

#### InvalidDataError

- name: `INVALID_DATA_ERROR`
- code: `400`
- message: `invalid data: <name>`

#### RequiredError

- name: `REQUIRED_ERROR`
- code: `400`
- message: `required: <name>`

#### ArgumentRequiredError

- name: `ARGUMENT_REQUIRED_ERROR`
- code: `400`
- message: `argument required: <name>`

#### OptionRequiredError

- name: `OPTION_REQUIRED_ERROR`
- code: `400`
- message: `option required: <name>`

#### HeaderRequiredError

- name: `HEADER_REQUIRED_ERROR`
- code: `400`
- message: `header required: <name>`

#### NotImplementedError

- name: `NOT_IMPLEMENTED_ERROR`
- code: `403`
- message: `not implemented: <name>`

#### UnsupportedError

- name: `UNSUPPORTED_ERROR`
- code: `403`
- message: `unsupported: <name>`

#### TypeSupportedError

- name: `TYPE_SUPPORTED_ERROR`
- code: `403`
- message: `type supported: <type>:<name>`

#### NotAllowedError

- name: `NOT_ALLOWED_ERROR`
- code: `403`
- message: `not allowed: <name>`

#### TypeNotAllowedError

- name: `TYPE_NOT_ALLOWED_ERROR`
- code: `403`
- message: `type not allowed: <type>:<name>`

#### UnexpectedError

- name: `UNEXPECTED_ERROR`
- code: `500`
- message: `unexpected: <name>`

#### ToBeDoneError

- name: `TBD_ERROR`
- code: `403`
- message: `TBD: <name>`
