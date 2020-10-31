import { findProjectById, saveProject } from './repository';
import { Project } from '../../models';
import { CreateProjectDTO, mapperFromProjectDTO } from './utils';
import { validateCreateProject } from './utils/validators/post';
import { HttpStatusErrorCode } from 'ciencia-argentina-backend-commons/dist/commons/constants';
import { HTTPCienciaError } from 'ciencia-argentina-backend-commons';

export const getProjectById = async (id: string): Promise<Project> => {
  const project = await findProjectById(id);
  if (!project) throw new HTTPCienciaError(HttpStatusErrorCode.NotFound);
  return project;
};

interface ProjectCreated {
  id: number;
}

export const createProject = async (projectDTO: CreateProjectDTO): Promise<ProjectCreated> => {
  const validationErrors = validateCreateProject(projectDTO);

  if (validationErrors) throw validationErrors;

  const project = mapperFromProjectDTO(projectDTO);
  const id = await saveProject(project);
  const response: ProjectCreated = {
    id,
  };
  return response;
};
