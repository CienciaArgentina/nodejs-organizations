import {postOrganizationBody} from '../schemas/postOrganizationBody'
import { CreateOrganizationDTO} from '../models'
import {ValidationError,validateJsonSchema} from 'ciencia-argentina-backend-commons'

export const validateCreateOrganization = (organizationDTO: CreateOrganizationDTO): ValidationError[] => {
    return validateJsonSchema(postOrganizationBody,organizationDTO);
};
  