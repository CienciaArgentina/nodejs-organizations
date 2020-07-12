import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export class Project extends Model {
    
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
  }

  

}
