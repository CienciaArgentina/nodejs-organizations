import { HTTP404Error } from 'ciencia-argentina-backend-commons';
import {
  findProjectById,
} from './repository';
import { Project } from '../../models';

export const getProjectById = async (id: string): Promise<Project> => {
  const project = await findProjectById(id);
  if (!project) throw new HTTP404Error();
  return project;
};