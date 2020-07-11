import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export default class Departments extends Model {
    
  static tableName = TableNames.Departments;

  static modifiers = {
    defaultSelects(query:any) {
      const { ref } = Departments
      query.select(
        ref('id'),
        ref('name'),
        ref('description'),
        ref('link'),
        ref('department_head')
      )
    }
  }

}
