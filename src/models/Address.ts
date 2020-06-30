import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import Organizations from './Organizations';

export default class Addresses extends Model {
    
  static tableName = TableNames.Address;

  static get relationMappings() {

    return {
      owner: {
        relation: Model.BelongsToOneRelation,

        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: Organizations,

        join: {
          from: 'addresses.id',
          to: 'organizations.addressid',
        }
      }
    }
  }

}
