import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import Addresses from './Address';

export default class Organizations extends Model {
    
  static tableName = TableNames.Organization;

  static relationMappings = () => ({
    addresses: {
      relation: Model.HasOneRelation,
      // The related model.
      modelClass: Addresses,

      join: {
        from: 'organizations.AddressId',
        to: 'addresses.Id'
      }
    }
  })
}
