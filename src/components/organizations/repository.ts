import {Organization,UserOrganization} from '../../models';
import { Page } from 'objection';
import { httpClient } from '../../utils/httpClient';

export const findOrganizationsByUser = async (id: string,limit:number,offset:number): Promise<Page<Organization>> => {
  const result = await Organization.query().
  leftJoinRelation('user').
  where({'user.user_id': id}).
  modify('defaultSelects').
  modify('populateModel').
  page(offset,limit);

  return result
}

export const findOrganizationsById = async (id: string): Promise<Organization | undefined> => {

  return await Organization.query().
  modify('defaultSelects').
  modify('populateModel').
  findById(id);

};

export const saveOrganization = async (organization: Organization): Promise<number> => {

  const transaction = await Organization.startTransaction();
  try {
    const graph = await Organization.query()
    .insertGraph(organization)

    transaction.commit();
    return graph.$id();

  }catch(error){
    transaction.rollback();
    throw error;
  }

};


export const addUser = async (organization_id:string,user_id:string): Promise<void> => {

  await UserOrganization.query().insert({
    user_id,
    organization_id
  });

  const host = process.env.CIENCIA_API_HOST || ''
  const request = httpClient(host)
  await request.post("/assign", {
    "auth_id": user_id,
    "role_id": process.env.USER_DEFAULT_ROLE || ''
  });
};

export const updateOrganization = async (id: string, organization: Organization): Promise<boolean> => {
  const result = await Organization
  .query()
  .patch(organization)
  .where('id', id)
  return !!result;

};