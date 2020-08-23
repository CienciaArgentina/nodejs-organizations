import { Department} from '../../models';

export const findDepartmentById = async (id: string): Promise<Department | undefined> => {
  return await Department.query().
  findById(id).
  modify('defaultSelects').
  modify('populateModel')
};

export const saveDepartment = async (department:Department): Promise<number> => {
  const graph = await Department.query()
  .insert(department)
  return graph.$id()
}