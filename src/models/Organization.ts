import { TableNames } from '../commons/constants';
import { Model, RelationMapping, RelationMappings } from 'objection';
import { Address, OrganizationType } from '.';
import { User,Department,} from './'

export class Organization extends Model {
  static tableName = TableNames.Organization;
  
  id?: number
  acronym!: string | null
  name!: string
  summary?: string | null
  description?: string | null
  website?: string | null
  is_active?: boolean
  address!: Address
  address_id!: string


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

  static get relationMappings(): RelationMappings {
    const user: RelationMapping<User> = {
      relation: Model.ManyToManyRelation,
      modelClass: User,
      join: {
        from: 'organization.id',
        through: {
          from: 'user_organization.user_id',
          to: 'user_organization.organization_id'
        },
        to: 'userprofiles.id'
      }
    };

    const organization_type: RelationMapping<OrganizationType> = {
      relation: Model.HasOneRelation,
      modelClass: OrganizationType,
      join: {
        from: 'organization.organization_type_id',
        to: 'organization_type.id'
      }
    }; 

    const address: RelationMapping<Address> = {
      relation: Model.HasOneRelation,
      modelClass: Address,
      join: {
        from: 'organization.address_id',
        to: 'address.id'
      }
    }; 

    const departments: RelationMapping<Department> = {
      relation: Model.HasManyRelation,
      modelClass: Department,
      join: {
        from: 'organization.id',
        to: 'department.organization_id'
      }
    }; 

    return { address,organization_type,departments,user}
  }
}