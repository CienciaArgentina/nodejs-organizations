import { isNullOrUndefined } from 'util';
import { HTTP404Error, HttpValidationError } from 'ciencia-argentina-backend-commons';
import {
  findDepartmentById,
  saveDepartment
} from './repository';
import { Department} from '../../models';
import { CreateDepartmentDTO, mapperFromDepartmentDTO } from './utils';
import { validateCreateDepartment } from './utils/validators/post'

export const getDepartmentById = async (id: string): Promise<Department> => {
  const department = await findDepartmentById(id);
  if (isNullOrUndefined(department)) throw new HTTP404Error();

  return department;
};

interface DepartmentCreated {
  id:number
}

export const createDepartment = async (departmentDTO:CreateDepartmentDTO): Promise <DepartmentCreated> => {
  const errors = validateCreateDepartment(departmentDTO);
  
  if(errors) throw new HttpValidationError(errors);
  
  const department = mapperFromDepartmentDTO(departmentDTO)
  const id = await saveDepartment(department);
  const response : DepartmentCreated = {
    id
  }
  return response;
}