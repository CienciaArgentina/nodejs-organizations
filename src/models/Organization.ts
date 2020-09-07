import { TableNames } from '../commons/constants';
import { Model, RelationMapping, RelationMappings } from 'objection';
import { Address, OrganizationType } from '.';
import { UserOrganization,Department,} from './'

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
  address_id!: number


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
    const user: RelationMapping<UserOrganization> = {
      relation: Model.HasManyRelation,
      modelClass: UserOrganization,
      join: {
        from: `${TableNames.Organization}.id`,
        to: `${TableNames.UserOrganization}.organization_id`
      }
    };

    const organization_type: RelationMapping<OrganizationType> = {
      relation: Model.HasOneRelation,
      modelClass: OrganizationType,
      join: {
        from: `${TableNames.Organization}.organization_type_id`,
        to: `${TableNames.OrganizationType}.id`
      }
    }; 

    const address: RelationMapping<Address> = {
      relation: Model.BelongsToOneRelation,
      modelClass: Address,
      join: {
        from: `${TableNames.Organization}.address_id`,
        to: `${TableNames.Address}.id`
      }
    }; 

    const departments: RelationMapping<Department> = {
      relation: Model.HasManyRelation,
      modelClass: Department,
      join: {
        from: `${TableNames.Organization}.id`,
        to: `${TableNames.Departments}.organization_id`
      }
    }; 

    return { address,organization_type,departments,user}
  }
}