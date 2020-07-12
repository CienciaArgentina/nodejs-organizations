import {Organization, Department} from '../../models';

export const findOrganizationsById = async (id: string): Promise<Organization | undefined> => {

  return await Organization.query().
  modify('defaultSelects').
  modify('populateModel').
  findById(id);

};

export const findDepartmentById = async (id: string): Promise<Department | undefined> => {

  return await Department.query().
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
  await Organization
  .query()
  .patch(organization)
  .where('id', id)
  return true

};