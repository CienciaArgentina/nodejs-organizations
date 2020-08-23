import {createProjectBody} from '../schemas/createProjectBody'
import {CreateProjectDTO} from '../models'
import {ValidationError,validateJsonSchema} from 'ciencia-argentina-backend-commons'

export const validateCreateProject = (proyectDTO: CreateProjectDTO): ValidationError | null => {
  const error = validateJsonSchema(createProjectBody,proyectDTO,'example message');
  return error
}