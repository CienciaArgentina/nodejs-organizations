import { notFoundError } from 'ciencia-argentina-backend-commons';
import { findDepartmentById, saveDepartment, updateDepartment, deleteDepartment } from './repository';
import { Department } from '../../models';
import { CreateDepartmentDTO, mapperFromDepartmentDTO } from './utils';
import { validateCreateDepartment } from './utils/validators/post';

export const getDepartmentById = async (id: string): Promise<Department> => {
  const department = await findDepartmentById(id);
  if (!department) throw notFoundError();

  return department;
};

interface DepartmentCreated {
  id: number;
}

export const createDepartment = async (departmentDTO: CreateDepartmentDTO): Promise<DepartmentCreated> => {
  const errorsValidations = validateCreateDepartment(departmentDTO);

  if (errorsValidations) throw errorsValidations;

  const department = mapperFromDepartmentDTO(departmentDTO);
  const id = await saveDepartment(department);
  const response: DepartmentCreated = {
    id,
  };
  return response;
};

export const updateDepartmentById = async (id: string, departmentDTO: CreateDepartmentDTO): Promise<boolean> => {
  const department = await findDepartmentById(id);
  if (department) throw notFoundError();

  const errorsValidation = validateCreateDepartment(departmentDTO);

  if (errorsValidation) throw errorsValidation;

  const departmentRequest = mapperFromDepartmentDTO(departmentDTO);
  departmentRequest.id = id;
  const result = await updateDepartment(departmentRequest);

  return !!result;
};

export const deleteDepartmentById = async (id: string): Promise<void> => {
  const department = await findDepartmentById(id);
  if (department) throw notFoundError();

  await deleteDepartment(id);
};
