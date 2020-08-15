import { isNullOrUndefined } from 'util';
import { HTTP404Error } from '@cienciaargentina/nodejs-backend-commons';
import {
  findOrganizationsById,
  findOrganizationsByUser,
  saveOrganization,
  updateOrganization,
  //departments
  findDepartmentById,
  //projects
  findProjectById,
} from './repository';
import { Organization,Department,Project } from '../../models';
import {OrganizationsDTO} from './utils';
import { mapperFromOrganizationDTO } from './utils/mapper';

interface OrganizationCreated {
  id: number;
}

export const getById = async (id: string): Promise<Organization> => {
  const organizations = await findOrganizationsById(id);
  if (isNullOrUndefined(organizations)) throw new HTTP404Error();

  return organizations;
};

export const getMyOrganizations = async (): Promise<Organization[]> => {
  const user_id = '1';
  const organizations = await findOrganizationsByUser(user_id);
  if (isNullOrUndefined(organizations)) throw new HTTP404Error();
  return organizations;
}

//TODO
export const getOrganizations = async (id: string): Promise<Organization> => {
  const organizations = await findOrganizationsById(id);
  if (isNullOrUndefined(organizations)) throw new HTTP404Error();

  return organizations;
};

export const getDepartmentById = async (id: string): Promise<Department> => {
  const department = await findDepartmentById(id);
  if (isNullOrUndefined(department)) throw new HTTP404Error();

  return department;
};

export const createOrganization = async (organizationDTO: OrganizationsDTO): Promise<OrganizationCreated> => {
  const organization = mapperFromOrganizationDTO(organizationDTO)
  const id = await saveOrganization(organization);
  const response : OrganizationCreated = {
    id
  }
  return response;
};

export const patchOrgnization = async (id: string, organization: Organization ): Promise<Boolean> => {
  await updateOrganization(id, organization);
  return true;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const project = await findProjectById(id);
  if (isNullOrUndefined(project)) throw new HTTP404Error();
  return project;
};