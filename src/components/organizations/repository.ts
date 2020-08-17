import {Organization} from '../../models';

export const findOrganizationsByUser = async (id: string): Promise<Organization[] | undefined> => {
  const result =  await Organization.query()
  .leftJoinRelated('user')
  .where({'user.id': id})
  .modify('defaultSelects')
  return result
}

export const findOrganizationsById = async (id: string): Promise<Organization | undefined> => {

  return await Organization.query().
  modify('defaultSelects').
  modify('populateModel').
  findById(id);

};

export const saveOrganization = async (organization: Organization): Promise<number> => {
  const graph = await Organization.query()
  .insert(organization)
  return graph.$id()

};

export const updateOrganization = async (id: string, organization: Organization): Promise<boolean> => {
  const result = await Organization
  .query()
  .patch(organization)
  .where('id', id)
  return !!result;

};