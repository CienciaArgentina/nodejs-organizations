import { isNullOrUndefined } from 'util';
import { HTTP404Error } from 'ciencia-argentina-backend-commons';
import {
  findDepartmentById,
} from './repository';
import { Department} from '../../models';

export const getDepartmentById = async (id: string): Promise<Department> => {
  const department = await findDepartmentById(id);
  if (isNullOrUndefined(department)) throw new HTTP404Error();

  return department;
};
