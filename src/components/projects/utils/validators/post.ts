import { createProjectBody } from '../schemas/createProjectBody';
import { CreateProjectDTO } from '../models';
import { HTTPCienciaError, validateJsonSchema } from 'ciencia-argentina-backend-commons';

export const validateCreateProject = (proyectDTO: CreateProjectDTO): HTTPCienciaError | null => {
  return validateJsonSchema(createProjectBody, proyectDTO, 'example message');
};
