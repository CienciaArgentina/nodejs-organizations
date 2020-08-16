export interface CreateOrganizationDTO  {
	acronym: string|null,
	name: string,
	summary?: string|null,
	description?: string|null,
	website?: string|null
}