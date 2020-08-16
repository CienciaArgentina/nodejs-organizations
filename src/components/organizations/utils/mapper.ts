import { Organization } from '../../../models';
import { CreateOrganizationDTO } from './'

export const mapperFromOrganizationDTO = ( {
    acronym,
    name,
    summary,
    description,
    website
  }:CreateOrganizationDTO ): Organization => {
    let organization: Organization = new Organization()
    organization.acronym = acronym
    organization.name = name
    organization.summary = summary
    organization.description = description
    organization.website = website
    return organization
  }