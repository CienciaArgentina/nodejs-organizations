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
import { CreateOrganizationDTO,AddUserToOrganizationDTO,OrganizationRequest,PageResponse } from './utils';
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

//TODO: Validaciones de todo tipo
export const getOrganizations = async ({limit = 200,offset = 0}:OrganizationRequest): Promise<PageResponse<Organization>> => {
  const user_id = '2';
  const results = await findOrganizationsByUser(user_id,limit,offset);
  if (!results?.length) throw new HTTP404Error();

  return {
    total:0,
    limit: +limit,
    offset: +offset,
    results
  };
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
