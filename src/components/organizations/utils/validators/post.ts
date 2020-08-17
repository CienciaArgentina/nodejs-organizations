import {postOrganizationBody} from '../schemas/postOrganizationBody'
import { OrganizationsDTO} from '../models'
import {ValidationError,validateJsonSchema} from 'ciencia-argentina-backend-commons'

export const validateCreateOrganization = (organizationDTO: OrganizationsDTO): ValidationError | null => {
    return validateJsonSchema(postOrganizationBody,organizationDTO,'example message');
};
    