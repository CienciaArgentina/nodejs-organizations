import {postOrganizationBody} from '../schemas/postOrganizationBody'
import { OrganizationsDTO} from '../models'
import {ValidationError,validateJsonSchema} from './validator'

export const validateCreateOrganization = (organizationDTO: OrganizationsDTO): ValidationError[] => {
    return validateJsonSchema(postOrganizationBody,organizationDTO);
};
  