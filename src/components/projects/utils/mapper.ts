import { Project } from '../../../models/'
import { CreateProjectDTO } from './'

export const mapperFromProjectDTO = ({
	name,
	description,
	department_id,
	project_head,
	experimental_model
}:CreateProjectDTO):Project =>  {
	let project = new Project()
	project.name = name
	project.description = description
	project.department_id = department_id
	project.project_head = project_head
	project.experimental_model = experimental_model
	return project
}