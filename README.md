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
	errors
} = require('@nayotta/errors')
// ESM
import {
	ToBeDoneError,
	errors
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
