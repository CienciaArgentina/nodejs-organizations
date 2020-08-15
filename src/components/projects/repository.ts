import {Project} from '../../models';

export const findProjectById = async (id:string): Promise<Project | undefined> => {
  return await Project.query()
  .modify('defaultSelects')
  .modify('populateModel')
  .findById(id);
}