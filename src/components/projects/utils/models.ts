export interface CreateProjectDTO {
	name: string
	description?: string | null
	department_id: number
	project_head?: string | null
	experimental_model?: string | null
}