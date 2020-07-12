import Organizations from '../../models/Organizations';
import Departments from '../../models/Departments';
import Objection from 'objection';

export const findOrganizationsById = async (id: string): Promise<Organizations | undefined> => {
  // return await Organizations.query().
  // select('organizations.*','addresses.*').
  // join('addresses', 'organizations.addressid', '=', 'addresses.id').findById(id);

  return await Organizations.query().
  modify('defaultSelects').
  modify('populateModel').
  findById(id);

};

export const findDepartmentById = async (id: string): Promise<Departments | undefined> => {

  return await Departments.query().
  modify('defaultSelects').
  modify('populateModel').
  findById(id);

};

export const saveOrganization = async (organization: Organizations): Promise<number> => {
  const graph = await Organizations.query()
  .insert(organization)
  return graph.$id()

};