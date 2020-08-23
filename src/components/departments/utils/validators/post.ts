import {createDepartmentBody} from '../schemas/ceateDepartmentBody'
import {CreateDepartmentDTO} from '../models'
import {ValidationError,validateJsonSchema} from 'ciencia-argentina-backend-commons'

export const validateCreateDepartment = (departmentDTO: CreateDepartmentDTO): ValidationError | null => {
  const error = validateJsonSchema(createDepartmentBody,departmentDTO,'example message');
  return error
};