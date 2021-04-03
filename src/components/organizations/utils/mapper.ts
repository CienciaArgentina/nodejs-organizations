import { Organization,Address } from '../../../models';
import { CreateOrganizationDTO,AddressDTO} from './'

export const mapperFromOrganizationDTO = ( {
    acronym,
    name,
    summary,
    description,
    website,
    address
  }:CreateOrganizationDTO ): Organization => {
    let organization: Organization = new Organization()
    organization.acronym = acronym
    organization.name = name
    organization.summary = summary
    organization.description = description
    organization.website = website
    organization.address = mapperAddressFromAddressDTO(address)
    return organization
  }

  export const mapperAddressFromAddressDTO = ( {
      street_name,
      street_number,
      zip_code,
      locality_id,
      additionals
  }:AddressDTO ): Address => {
    let address: Address = new Address()
    address.street_name = street_name
    address.street_number = street_number
    address.locality_id = locality_id
    address.zip_code = zip_code
    address.additionals = additionals
    address.latitude = '1'
    address.longitude = '1'
    return address
  }