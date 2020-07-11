import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export default class Departments extends Model {
    
  static tableName = TableNames.Departments;

  static modifiers = {
    defaultSelects(query:any) {
      query.select('id', 'name', 'description', 'link', 'department_head')
    }
  }

}
