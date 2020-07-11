import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import Projects from './Projects';

//TODO: cambiar clases y archivos a singular

export default class Departments extends Model {

  static tableName = TableNames.Departments;

  static modifiers = {
    defaultSelects(query:any) {
      const { ref } = Departments
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
      .withGraphJoined('organization')
      .withGraphFetched('projects(defaultSelects)')
    }
  }

  static relationMappings = {
    projects: {
      relation: Model.HasManyRelation,
      modelClass: Projects,
      join: {
        from: 'department.id',
        to: 'project.department_id'
      }
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: require('./Organizations').default,
      join: {
        from: 'department.organization_id',
        to: 'organization.id'
      }
    },
  }

}
