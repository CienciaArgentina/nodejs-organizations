import { Department } from '../../../models/Department'
import { CreateDepartmentDTO } from './'

export const mapperFromDepartmentDTO = ( {
	name,
	description,
	website,
	organization_id,
	department_head,
}:CreateDepartmentDTO ): Department => {
	let department:Department = new Department()
	department.name = name
	department.description = description
	department.website = website
	department.organization_id = organization_id
	department.department_head = department_head

	return department
}