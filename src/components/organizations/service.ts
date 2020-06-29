import { isNullOrUndefined } from 'util';
import { HTTP404Error } from '@cienciaargentina/nodejs-backend-commons';
import { findOrganizationsById } from './repository';
import Organizations from '../../models/Organizations';

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