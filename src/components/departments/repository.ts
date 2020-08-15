import { Department} from '../../models';

export const findDepartmentById = async (id: string): Promise<Department | undefined> => {

  return await Department.query().
  modify('defaultSelects').
  modify('populateModel').
  findById(id);
};
