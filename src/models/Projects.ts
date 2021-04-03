import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export class Project extends Model {

  name!: string
	description?: string | null
	project_head?: string | null
	experimental_model?: string | null
	department_id!: number
    
  static tableName = TableNames.Projects;

  static modifiers = {
    defaultSelects(query:any) {
      const { ref } = Project
      query.select(
        ref('id'),
        ref('name'),
        ref('project_head'),
        ref('description'),
        ref('experimental_model')
      )
    },
    populateModel(query:any) {
      query
      .withGraphJoined('department(defaultSelects)')
      .withGraphFetched('organization(defaultSelects)')
    }
  }

  static relationMappings = () => ({
    department: {
      relation: Model.BelongsToOneRelation,
      modelClass: require('./Department').Department,
      join: {
        from: 'project.department_id',
        to: 'department.id'
      }
    },
    organization: {
      relation: Model.HasOneThroughRelation,
      modelClass: require('./Organization').Organization,
      join: {
        from: 'project.department_id',
        through: {
          from: 'department.id',
          to: 'department.organization_id'
        },
        to: 'organization.id'
      }
    }
  })

}