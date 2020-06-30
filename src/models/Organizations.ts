import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import Addresses from './Address';

export default class Organizations extends Model {
    
  static tableName = TableNames.Organization;

  static get relationMappings() {

    return {
      addresses: {
        relation: Model.HasOneRelation,
        modelClass: Addresses,
        join: {
          from: 'organizations.addressid',
          to: 'addresses.id'
        }
      }
    };
  }
}
