import {Project} from '../../models';

export const findProjectById = async (id:string): Promise<Project | undefined> => {
  return await Project.query()
  .modify('defaultSelects')
  .modify('populateModel')
  .findById(id);
}

export const saveProject = async(project:Project): Promise<number> => {
  const graph = await Project.query()
  .insert(project)
  return graph.$id()
}