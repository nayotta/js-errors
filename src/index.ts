export function is (err1: Error, err2: Error): boolean {
	return err1.name === err2.name
}

export class UnauthorizationError extends Error {
	public name: string = 'UNAUTHORIZATION_ERROR'
	public code: number = 401
	public message: string = 'unauthorization'
	constructor (message?: string) {
		super()
		this.message += `: ${message}`
	}
}

export class NotFoundError extends Error {
	public name: string = 'NOT_FOUND_ERROR'
	public code: number = 404
	public message: string = 'not found'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class ResourceNotFoundError extends Error {
	public name: string = 'RESOURCE_NOT_FOUND_ERROR'
	public code: number = 404
	public message: string = 'resource not found'
	constructor (resource: string, name: string) {
		super()
		this.message += `: ${resource}:${name} not found`
	}
}

export class ResourceAlreadyExistedError extends Error {
	public name: string = 'RESOURCE_ALREADY_EXISTED_ERROR'
	public code: number = 400
	public message: string = 'resource already existed'
	constructor (resource: string, name: string) {
		super()
		this.message += `: ${resource}:${name} already existed`
	}
}

export class InvalidDataError extends Error {
	public name: string = 'INVALID_DATA_ERROR'
	public code: number = 400
	public message: string = 'invalid data'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class RequiredError extends Error {
	public name: string = 'REQUIRED_ERROR'
	public code: number = 400
	public message: string = 'required'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class ArgumentRequiredError extends Error {
	public name: string = 'ARGUMENT_REQUIRED_ERROR'
	public code: number = 400
	public message: string = 'argument required'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class OptionRequiredError extends Error {
	public name: string = 'OPTION_REQUIRED_ERROR'
	public code: number = 400
	public message: string = 'option required'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class HeaderRequiredError extends Error {
	public name: string = 'HEADER_REQUIRED_ERROR'
	public code: number = 400
	public message: string = 'header required'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class NotImplementedError extends Error {
	public name: string = 'NOT_IMPLEMENTED_ERROR'
	public code: number = 403
	public message: string = 'not implemented'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class UnsupportedError extends Error {
	public name: string = 'UNSUPPORTED_ERROR'
	public code: number = 403
	public message: string = 'unsupported'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class TypeUnsupportedError extends Error {
	public name: string = 'TYPE_UNSUPPORTED_ERROR'
	public code: number = 403
	public message: string = 'type unsupported'
	constructor (type: string, name: string) {
		super()
		this.message += `: ${type}:${name}`
	}
}

export class NotAllowedError extends Error {
	public name: string = 'NOT_ALLOWED_ERROR'
	public code: number = 403
	public message: string = 'not allowed'
	constructor (name?: string) {
		super()
		this.message += `: ${name}`
	}
}

export class TypeNotAllowedError extends Error {
	public name: string = 'TYPE_NOT_ALLOWED_ERROR'
	public code: number = 403
	public message: string = 'type not allowed'
	constructor (type: string, name: string) {
		super()
		this.message += `: ${type}:${name}`
	}
}

export class ToBeDoneError extends Error {
	public name: string = 'TBD_ERROR'
	public code: number = 403
	public message: string = 'TBD'
	constructor (name: string) {
		super()
		this.message += `: ${name}`
	}
}

export const errors = {
	is,
	UnauthorizationError,
	NotFoundError,
	ResourceNotFoundError,
	ResourceAlreadyExistedError,
	InvalidDataError,
	RequiredError,
	ArgumentRequiredError,
	OptionRequiredError,
	HeaderRequiredError,
	NotImplementedError,
	UnsupportedError,
	TypeUnsupportedError,
	NotAllowedError,
	TypeNotAllowedError,
	ToBeDoneError
}
