import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export default class Projects extends Model {
    
  static tableName = TableNames.Projects;

  static modifiers = {
    defaultSelects(query:any) {
      const { ref } = Projects
      query.select(
        ref('id'),
        ref('name'),
        ref('project_head'),
        ref('description'),
        ref('experimental_model')
      )
    },
  }

  

}
