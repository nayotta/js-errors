import { errors } from '../src'

test('unauthorization error', () => {
	const err = new errors.UnauthorizationError('token')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('UNAUTHORIZATION_ERROR')
	expect(err.message).toBe('unauthorization: token')
	expect(err.code).toBe(401)
})

test('not found error', () => {
	const err = new errors.NotFoundError('name')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('NOT_FOUND_ERROR')
	expect(err.message).toBe('not found: name')
	expect(err.code).toBe(404)
})

test('resource not found error', () => {
	const err = new errors.ResourceNotFoundError('name', 'nyt')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('RESOURCE_NOT_FOUND_ERROR')
	expect(err.message).toBe('resource not found: name:nyt not found')
	expect(err.code).toBe(404)
})

test('resource already existed error', () => {
	const err = new errors.ResourceAlreadyExistedError('name', 'nyt')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('RESOURCE_ALREADY_EXISTED_ERROR')
	expect(err.message).toBe('resource already existed: name:nyt already existed')
	expect(err.code).toBe(400)
})

test('invalid data error', () => {
	const err = new errors.InvalidDataError('name')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('INVALID_DATA_ERROR')
	expect(err.message).toBe('invalid data: name')
	expect(err.code).toBe(400)
})

test('required error', () => {
	const err = new errors.RequiredError('name')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('REQUIRED_ERROR')
	expect(err.message).toBe('required: name')
	expect(err.code).toBe(400)
})

test('argument required error', () => {
	const err = new errors.ArgumentRequiredError('name')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('ARGUMENT_REQUIRED_ERROR')
	expect(err.message).toBe('argument required: name')
	expect(err.code).toBe(400)
})

test('option required error', () => {
	const err = new errors.OptionRequiredError('X-x')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('OPTION_REQUIRED_ERROR')
	expect(err.message).toBe('option required: X-x')
	expect(err.code).toBe(400)
})

test('header required error', () => {
	const err = new errors.HeaderRequiredError('X-x')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('HEADER_REQUIRED_ERROR')
	expect(err.message).toBe('header required: X-x')
	expect(err.code).toBe(400)
})

test('not implemented error', () => {
	const err = new errors.NotImplementedError('function')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('NOT_IMPLEMENTED_ERROR')
	expect(err.message).toBe('not implemented: function')
	expect(err.code).toBe(403)
})

test('unsupported error', () => {
	const err = new errors.UnsupportedError('function')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('UNSUPPORTED_ERROR')
	expect(err.message).toBe('unsupported: function')
	expect(err.code).toBe(403)
})

test('type unsupported error', () => {
	const err = new errors.TypeUnsupportedError('function', 'a')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('TYPE_UNSUPPORTED_ERROR')
	expect(err.message).toBe('type unsupported: function:a')
	expect(err.code).toBe(403)
})

test('not allowed error', () => {
	const err = new errors.NotAllowedError('function')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('NOT_ALLOWED_ERROR')
	expect(err.message).toBe('not allowed: function')
	expect(err.code).toBe(403)
})

test('type not allowed error', () => {
	const err = new errors.TypeNotAllowedError('function', 'a')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('TYPE_NOT_ALLOWED_ERROR')
	expect(err.message).toBe('type not allowed: function:a')
	expect(err.code).toBe(403)
})

test('to be done error', () => {
	const err = new errors.ToBeDoneError('function a')
	expect(err instanceof Error).toBe(true)
	expect(err.name).toBe('TBD_ERROR')
	expect(err.message).toBe('TBD: function a')
	expect(err.code).toBe(403)
})

test('is', () => {
	const e1 = new errors.UnauthorizationError('e1')
	const e2 = new errors.UnauthorizationError('e2')
	expect(errors.is(e1, e2)).toBe(true)
})
