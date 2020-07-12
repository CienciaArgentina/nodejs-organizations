import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import Addresses from './Address';
import OrganizationType from './OrganizationType'

export default class Organizations extends Model {
    
  static tableName = TableNames.Organization;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type:'integer' },
        acronym: { type:['string', 'null'] },
        name: { type:'string' },
        summary: { type:['string', 'null'] },
        description: { type:['string', 'null'] },
        website: { type:['string', 'null'] },
        is_active: {type:['boolean', 'null']}
      },
      additionalProperties: true
    }
  }

  static is_active: Boolean

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
      modelClass: require('./Departments').default,
      join: {
        from: 'organization.id',
        to: 'department.organization_id'
      }
    },
  })
}
