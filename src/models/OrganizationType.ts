import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export default class Addresses extends Model {
    
  static tableName = TableNames.OrganizationType;

  static modifiers = {
    defaultSelects(query:any) {
      const { ref } = Addresses;
      query.select(
        ref('id'),
        ref('description'),
        ref('pay_platform')
      )
    }
  }

}
