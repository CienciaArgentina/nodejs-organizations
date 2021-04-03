export interface CreateDepartmentDTO {
	name: string,
	description?: string|null,
	website?: string|null,
	organization_id: number,
	department_head?: string|null
}