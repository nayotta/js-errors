export class JsError extends Error {
	public code: number = 0
}

export function isError (err: any): boolean {
	return err instanceof Error
}

/**
 * unauthorization
 */
export const UNAUTHORIZATION_ERROR = 'UNAUTHORIZATION_ERROR'

export class UnauthorizationError extends JsError {
	public name: string = UNAUTHORIZATION_ERROR
	public code: number = 401
	public message: string = 'unauthorization'
	constructor (message?: string) {
		super()
		this.message += `: ${message}`
	}
}

export function isUnauthorizationError (err: Error): boolean {
	return err.name === UNAUTHORIZATION_ERROR
}

/**
 * not found
 */
export const NOT_FOUND_ERROR = 'NOT_FOUND_ERROR'

export class NotFoundError extends JsError {
	public name: string = NOT_FOUND_ERROR
	public code: number = 404
	public message: string = 'not found'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isNotFoundError (err: Error): boolean {
	return err.name === NOT_FOUND_ERROR
}

/**
 * resource not found
 */
export const RESOURCE_NOT_FOUND_ERROR = 'RESOURCE_NOT_FOUND_ERROR'

export class ResourceNotFoundError extends JsError {
	public name: string = RESOURCE_NOT_FOUND_ERROR
	public code: number = 404
	public message: string = 'resource not found'
	constructor (resource: string, name: string) {
		super()
		this.message += `: ${resource}:${name} not found`
	}
}

export function isResourceNotFoundError (err: Error): boolean {
	return err.name === RESOURCE_NOT_FOUND_ERROR
}

/**
 * resource already existed
 */
export const RESOURCE_ALREADY_EXISTED_ERROR = 'RESOURCE_ALREADY_EXISTED_ERROR'

export class ResourceAlreadyExistedError extends JsError {
	public name: string = RESOURCE_ALREADY_EXISTED_ERROR
	public code: number = 400
	public message: string = 'resource already existed'
	constructor (resource: string, name: string) {
		super()
		this.message += `: ${resource}:${name} already existed`
	}
}

export function isResourceAlreadyExistedError (err: Error): boolean {
	return err.name === RESOURCE_ALREADY_EXISTED_ERROR
}

/**
 * invalid data
 */
export const INVALID_DATA_ERROR = 'INVALID_DATA_ERROR'

export class InvalidDataError extends JsError {
	public name: string = INVALID_DATA_ERROR
	public code: number = 400
	public message: string = 'invalid data'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isInvalidDataError (err: Error): boolean {
	return err.name === INVALID_DATA_ERROR
}

/**
 * required
 */
export const REQUIRED_ERROR = 'REQUIRED_ERROR'

export class RequiredError extends JsError {
	public name: string = REQUIRED_ERROR
	public code: number = 400
	public message: string = 'required'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isRequiredError (err: Error): boolean {
	return err.name === REQUIRED_ERROR
}

/**
 * argument required
 */
export const ARGUMENT_REQUIRED_ERROR = 'ARGUMENT_REQUIRED_ERROR'

export class ArgumentRequiredError extends JsError {
	public name: string = ARGUMENT_REQUIRED_ERROR
	public code: number = 400
	public message: string = 'argument required'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isArgumentRequiredError (err: Error): boolean {
	return err.name === ARGUMENT_REQUIRED_ERROR
}

/**
 * option required
 */
export const OPTION_REQUIRED_ERROR = 'OPTION_REQUIRED_ERROR'

export class OptionRequiredError extends JsError {
	public name: string = OPTION_REQUIRED_ERROR
	public code: number = 400
	public message: string = 'option required'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isOptionRequiredError (err: Error): boolean {
	return err.name === OPTION_REQUIRED_ERROR
}

/**
 * header required
 */
export const HEADER_REQUIRED_ERROR = 'HEADER_REQUIRED_ERROR'

export class HeaderRequiredError extends JsError {
	public name: string = HEADER_REQUIRED_ERROR
	public code: number = 400
	public message: string = 'header required'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isHeaderRequiredError (err: Error): boolean {
	return err.name === HEADER_REQUIRED_ERROR
}

/**
 * not implemented
 */
export const NOT_IMPLEMENTED_ERROR = 'NOT_IMPLEMENTED_ERROR'

export class NotImplementedError extends JsError {
	public name: string = NOT_IMPLEMENTED_ERROR
	public code: number = 403
	public message: string = 'not implemented'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isNotImplementedError (err: Error): boolean {
	return err.name === NOT_IMPLEMENTED_ERROR
}

/**
 * unsupported
 */
export const UNSUPPORTED_ERROR = 'UNSUPPORTED_ERROR'

export class UnsupportedError extends JsError {
	public name: string = UNSUPPORTED_ERROR
	public code: number = 403
	public message: string = 'unsupported'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isUnsupportedError (err: Error): boolean {
	return err.name === UNSUPPORTED_ERROR
}

/**
 * type unsupported
 */
export const TYPE_UNSUPPORTED_ERROR = 'TYPE_UNSUPPORTED_ERROR'

export class TypeUnsupportedError extends JsError {
	public name: string = TYPE_UNSUPPORTED_ERROR
	public code: number = 403
	public message: string = 'type unsupported'
	constructor (type: string, name: string) {
		super()
		this.message += `: ${type}:${name}`
	}
}

export function isTypeUnsupportedError (err: Error): boolean {
	return err.name === TYPE_UNSUPPORTED_ERROR
}

/**
 * not allowed
 */
export const NOT_ALLOWED_ERROR = 'NOT_ALLOWED_ERROR'

export class NotAllowedError extends JsError {
	public name: string = NOT_ALLOWED_ERROR
	public code: number = 403
	public message: string = 'not allowed'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isNotAllowedError (err: Error): boolean {
	return err.name === NOT_ALLOWED_ERROR
}

/**
 * type not allowed
 */
export const TYPE_NOT_ALLOWED_ERROR = 'TYPE_NOT_ALLOWED_ERROR'

export class TypeNotAllowedError extends JsError {
	public name: string = TYPE_NOT_ALLOWED_ERROR
	public code: number = 403
	public message: string = 'type not allowed'
	constructor (type: string, name: string) {
		super()
		this.message += `: ${type}:${name}`
	}
}

export function isTypeNotAllowedError (err: Error): boolean {
	return err.name === TYPE_NOT_ALLOWED_ERROR
}

/**
 * to be done
 */
export const TBD_ERROR = 'TBD_ERROR'

export class ToBeDoneError extends JsError {
	public name: string = TBD_ERROR
	public code: number = 403
	public message: string = 'TBD'
	constructor (name: string) {
		super()
		this.message += `: ${name}`
	}
}

export function isToBeDoneError (err: Error): boolean {
	return err.name === TBD_ERROR
}

export const errors = {
	isError,
	UnauthorizationError,
	isUnauthorizationError,
	NotFoundError,
	isNotFoundError,
	ResourceNotFoundError,
	isResourceNotFoundError,
	ResourceAlreadyExistedError,
	isResourceAlreadyExistedError,
	InvalidDataError,
	isInvalidDataError,
	RequiredError,
	isRequiredError,
	ArgumentRequiredError,
	isArgumentRequiredError,
	OptionRequiredError,
	isOptionRequiredError,
	HeaderRequiredError,
	isHeaderRequiredError,
	NotImplementedError,
	isNotImplementedError,
	UnsupportedError,
	isUnsupportedError,
	TypeUnsupportedError,
	isTypeUnsupportedError,
	NotAllowedError,
	isNotAllowedError,
	TypeNotAllowedError,
	isTypeNotAllowedError,
	ToBeDoneError,
	isToBeDoneError
}
