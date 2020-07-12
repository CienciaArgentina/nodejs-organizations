import { Organization } from '../../../models';
import { OrganizationsDTO } from './'

export const mapperFromOrganizationDTO = ( {
    acronym,
    name,
    summary,
    description,
    website
  }:OrganizationsDTO ): Organization => {
    let organization: Organization = new Organization()
    organization.acronym = acronym
    organization.name = name
    organization.summary = summary
    organization.description = description
    organization.website = website
    return organization
  }