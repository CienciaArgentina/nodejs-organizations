import { postOrganizationBody } from '../schemas/postOrganizationBody';
import { CreateOrganizationDTO } from '../models';
import { HTTPCienciaError, validateJsonSchema } from 'ciencia-argentina-backend-commons';

export const validateCreateOrganization = (organizationDTO: CreateOrganizationDTO): HTTPCienciaError | null => {
  return validateJsonSchema(postOrganizationBody, organizationDTO, 'example message');
};
