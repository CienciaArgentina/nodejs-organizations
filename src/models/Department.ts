import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import  { Project }  from '.';

export class Department extends Model {
  id!: string
	name!: string
	description?: string | null
	website?: string | null
	organization_id!: number
	department_head?: string | null

  static tableName = TableNames.Departments;

  static get idColumn() {
    return 'id';
  }

  static modifiers = {
    defaultSelects(query:any) {
      const { ref } = Department
      query.select(
        ref('id'),
        ref('name'),
        ref('description'),
        ref('website'),
        ref('department_head')
      )
    },
    populateModel(query:any) {
      query
      .withGraphJoined('organization(defaultSelects)')
      .withGraphFetched('projects(defaultSelects)')
    }
  }

  static relationMappings = {
    projects: {
      relation: Model.HasManyRelation,
      modelClass: Project,
      join: {
        from: 'department.id',
        to: 'project.department_id'
      }
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: require('./Organization').Organization,
      join: {
        from: 'department.organization_id',
        to: 'organization.id'
      }
    },
  }

}