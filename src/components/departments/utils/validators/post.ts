import { createDepartmentBody } from '../schemas/createDepartmentBody';
import { CreateDepartmentDTO } from '../models';
import { HTTPCienciaError, validateJsonSchema } from 'ciencia-argentina-backend-commons';

export const validateCreateDepartment = (departmentDTO: CreateDepartmentDTO): HTTPCienciaError | null => {
  return validateJsonSchema(createDepartmentBody, departmentDTO, 'example message');
};
