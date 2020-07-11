import { isNullOrUndefined } from 'util';
import { HTTP404Error } from '@cienciaargentina/nodejs-backend-commons';
import { findOrganizationsById, findDepartmentById, saveOrganization } from './repository';
import Organizations from '../../models/Organizations';
import Departments from '../../models/Departments';

export const getById = async (id: string): Promise<Organizations> => {
  const organizations = await findOrganizationsById(id);
  if (isNullOrUndefined(organizations)) throw new HTTP404Error();

  return organizations;
};

export const getOrganizations = async (id: string): Promise<Organizations> => {
  const organizations = await findOrganizationsById(id);
  if (isNullOrUndefined(organizations)) throw new HTTP404Error();

  return organizations;
};

export const getDepartmentById = async (id: string): Promise<Departments> => {
  const department = await findDepartmentById(id);
  if (isNullOrUndefined(department)) throw new HTTP404Error();

  return department;
};

export const createOrganization = async (organization: Object): Promise<Number> => {
  console.log(organization);

  const id = await saveOrganization(organization);
  return id;
};