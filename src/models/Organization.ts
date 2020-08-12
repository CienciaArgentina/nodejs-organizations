import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import { Address, OrganizationType } from '.';

export class Organization extends Model {

  id?:number
  acronym?:string
  name!:string
  summary?:string
  description?:string
  website?:string
  is_active?:boolean

  static tableName = TableNames.Organization;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type:'integer', read_only:true },
        acronym: { type:['string', 'null'] },
        name: { type:'string' },
        summary: { type:['string', 'null'] },
        description: { type:['string', 'null'], minLength: 1, maxLength: 10 },
        website: { type:['string', 'null'] },
        is_active: { type:['boolean'] },
      }
    }
  }

  static is_active: Boolean

  static modifiers = {
    defaultSelects(query: any) {
      const { ref } = Organization
      query.select(ref('id'), ref('name'), ref('acronym'), ref('summary'), ref('description'), ref('website'))
    },
    populateModel(query: any) {
      query.withGraphJoined('address').
      withGraphJoined('organization_type(defaultSelects)').
      withGraphFetched('departments(defaultSelects)')
    }
  }

  static relationMappings = () => ({
    user: {
      relation: Model.ManyToManyRelation,
      modelClass: require('./User').User,
      join: {
        from: 'organization.id',
        through: {
          from: 'user_organization.user_id',
          to: 'user_organization.organization_id'
        },
        to: 'userprofiles.id'
      }
    },
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
      modelClass: Address,
      join: {
        from: 'organization.address_id',
        to: 'address.Id'
      }
    },
    departments: {
      relation: Model.HasManyRelation,
      modelClass: require('./Department').Department,
      join: {
        from: 'organization.id',
        to: 'department.organization_id'
      }
    },
  })
}
