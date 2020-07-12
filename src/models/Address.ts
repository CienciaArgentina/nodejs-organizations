import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export class Address extends Model {
    
  static tableName = TableNames.Address;

}
