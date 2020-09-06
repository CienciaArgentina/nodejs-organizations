import {Organization,UserOrganization} from '../../models';

export const findOrganizationsByUser = async (id: string): Promise<Organization[]> => {
  const result =  await Organization.query()
  .leftJoinRelated('user').
  // .where({'user_id': id}).
  modify('defaultSelects').
  modify('populateModel')
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

};

export const updateOrganization = async (id: string, organization: Organization): Promise<boolean> => {
  const result = await Organization
  .query()
  .patch(organization)
  .where('id', id)
  return !!result;

};