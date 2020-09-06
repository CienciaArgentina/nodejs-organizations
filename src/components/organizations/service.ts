import { isNullOrUndefined } from 'util';
import { HTTP404Error, HttpValidationError } from 'ciencia-argentina-backend-commons';
import {
  findOrganizationsById,
  findOrganizationsByUser,
  saveOrganization,
  updateOrganization,
  addUser
} from './repository';
import { Organization } from '../../models';
import { CreateOrganizationDTO,AddUserToOrganizationDTO } from './utils';
import { mapperFromOrganizationDTO } from './utils/mapper';
import { validateCreateOrganization } from './utils/validators/post'

interface OrganizationCreated {
  id: number;
}

export const getById = async (id: string): Promise<Organization> => {
  const organization = await findOrganizationsById(id);
  if (!organization) throw new HTTP404Error(`Organization don't exist`);

  return organization;
};

export const getMyOrganizations = async (): Promise<Organization[]> => {
  const user_id = '1';
  const organizations = await findOrganizationsByUser(user_id);
  if (isNullOrUndefined(organizations)) throw new HTTP404Error();
  return organizations;
}

//TODO
export const getOrganizations = async (): Promise<Organization[]> => {
  const user_id = '2';
  const organizations = await findOrganizationsByUser(user_id);
  if (!organizations?.length) throw new HTTP404Error();

  return organizations;
};

export const addUserToOrganization = async (organization_id: string,{user_id}: AddUserToOrganizationDTO): Promise<Organization> => {
  const organization = await getById(organization_id);
  
  await addUser(organization_id,user_id);
  return organization;
};

export const createOrganization = async (organizationDTO: CreateOrganizationDTO): Promise<OrganizationCreated> => {
  const errors = validateCreateOrganization(organizationDTO);
  
  if(errors) throw new HttpValidationError(errors);
  
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
