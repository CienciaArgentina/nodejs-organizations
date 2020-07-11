import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import Addresses from './Address';
import OrganizationType from './OrganizationType'
import Departments from './Departments';

export default class Organizations extends Model {
    
  static tableName = TableNames.Organization;

  static modifiers = {
    defaultSelects(query: any) {
      const { ref } = Organizations
      query.select(ref('id'), ref('name'), ref('acronym'), ref('summary'), ref('description'), ref('website'))
    },
    populateModel(query: any) {
      query.withGraphJoined('address').
      withGraphJoined('organization_type(defaultSelects)').
      withGraphFetched('departments(defaultSelects)')
    }
  }

  static relationMappings = () => ({
    organization_type: {
      relation: Model.HasOneRelation,
      modelClass: OrganizationType,
      join: {
        from: 'organization.organization_type_id',
        to: 'organization_type.id'
      }

    },
    address: {
      relation: Model.HasOneRelation,
      modelClass: Addresses,
      join: {
        from: 'organization.address_id',
        to: 'address.Id'
      }
    },
    departments: {
      relation: Model.HasManyRelation,
      modelClass: Departments,
      join: {
        from: 'organization.id',
        to: 'department.organization_id'
      }
    },
  })
}
