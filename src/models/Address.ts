import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import Organizations from './Organizations';

export default class Addresses extends Model {
    
  static tableName = TableNames.Address;

  static relationMappings = () => ({
    addresses: {
      relation: Model.BelongsToOneRelation,
      // The related model.
      modelClass: Organizations,

      join: {
        from: 'addresses.id',
        to: 'organizations.addressid'
      }
    }
  })

}
