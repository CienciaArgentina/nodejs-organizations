import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export class OrganizationType extends Model {
    
  static tableName = TableNames.OrganizationType;

  static modifiers = {
    defaultSelects(query:any) {
      const { ref } = OrganizationType;
      query.select(
        ref('id'),
        ref('description'),
        ref('pay_platform')
      )
    }
  }

}
