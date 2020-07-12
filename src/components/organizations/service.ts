import { isNullOrUndefined } from 'util';
import { HTTP404Error } from '@cienciaargentina/nodejs-backend-commons';
import {
  findOrganizationsById,
  findDepartmentById,
  saveOrganization,
  setActiveOrganization,
  updateOrganization
} from './repository';
import Organizations from '../../models/Organizations';
import Departments from '../../models/Departments';
import OrganizationsDTO from '../../models/OrganizationDTO'

interface OrganizationCreated {
  id: number;
}

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

const mapperFromOrganizationDTO = ( {
  acronym,
  name,
  summary,
  description,
  website
}:OrganizationsDTO ): Organizations => {
  let organization: Organizations = new Organizations()
  organization.acronym = acronym
  organization.name = name
  organization.summary = summary
  organization.description = description
  organization.website = website
  return organization
}

export const createOrganization = async (organizationDTO: OrganizationsDTO): Promise<OrganizationCreated> => {
  const organization = mapperFromOrganizationDTO(organizationDTO)
  const id = await saveOrganization(organization);
  const response : OrganizationCreated = {
    id
  }
  return response;
};

export const activateOrganization = async (id: string, organization: Organizations ): Promise<Boolean> => {
  // await setActiveOrganization(id, organization);
  return true;
};

export const patchOrgnization = async (id: string, organization: Organizations ): Promise<Boolean> => {
  await updateOrganization(id, organization);
  return true;
};