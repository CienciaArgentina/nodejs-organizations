import { HTTP404Error, HttpValidationError } from 'ciencia-argentina-backend-commons';
import {
  findProjectById,
  saveProject
} from './repository';
import { Project } from '../../models';
import { CreateProjectDTO, mapperFromProjectDTO } from './utils';
import { validateCreateProject } from './utils/validators/post'

export const getProjectById = async (id: string): Promise<Project> => {
  const project = await findProjectById(id);
  if (!project) throw new HTTP404Error();
  return project;
};

interface ProjectCreated {
  id:number
}

export const createProject = async (projectDTO:CreateProjectDTO): Promise <ProjectCreated> => {
  const errors = validateCreateProject(projectDTO);
  
  if(errors) throw new HttpValidationError(errors);
  
  const project = mapperFromProjectDTO(projectDTO)
  const id = await saveProject(project);
  const response : ProjectCreated = {
    id
  }
  return response;
}