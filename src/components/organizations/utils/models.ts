export interface CreateOrganizationDTO  {
	name: string,
	acronym: string|null,
	summary?: string|null,
	description?: string|null,
	website?: string|null,
	address: AddressDTO,
	email_domains?:string[]
}

export interface AddUserToOrganizationDTO  {
	user_id: string
}

export interface AddressDTO  {
	street_name: string,
	street_number: string,
	zip_code: string,
	additionals?: string,
	country?: string,
	stateOrProvince?: string,
	city?: string,
	locality_id: string,
	geo?: GeoDTO,
}

export interface GeoDTO  {
	type: string,
	coordinates: Coordinates,
}

export interface OrganizationRequest  {
	limit?: number,
	offset?: number,
}

export interface PageResponse<T> {
	limit?: number,
	offset?: number,
	total?:number,
	results?: T[]
}

