import Organizations from '../../models/Organizations';

export const findOrganizationsById = async (id: string): Promise<Organizations | undefined> => {
  // return await Organizations.query().
  // select('organizations.*','addresses.*').
  // join('addresses', 'organizations.addressid', '=', 'addresses.id').findById(id);

  return await Organizations.query().
  withGraphFetched('addresses').findById(id);

};
