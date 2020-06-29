import Organizations from '../../models/Organizations';

export const findOrganizationsById = async (id: string): Promise<Organizations | undefined> => {
  return await Organizations.query().findById(id);
};
