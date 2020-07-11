import { TableNames } from '../commons/constants';
import { Model } from 'objection';
import Organizations from './Organizations';

export default class Addresses extends Model {
    
  static tableName = TableNames.Address;

}
