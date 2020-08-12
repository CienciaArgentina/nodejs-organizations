import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import  { Project }  from '.';

//TODO: cambiar clases y archivos a singular

export class Department extends Model {

  static tableName = TableNames.Departments;

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
