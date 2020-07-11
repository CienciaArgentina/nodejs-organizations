import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export default class Addresses extends Model {
    
  static tableName = TableNames.OrganizationType;

  static modifiers = {
    defaultSelects(query:any) {
      query.select('id', 'description', 'pay_platform')
    }
  }

}
