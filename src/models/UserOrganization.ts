import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export class UserOrganization extends Model {
    
 static tableName = TableNames.UserOrganization;

  id!:number
  user_id!: string
  organization_id!: string

  static get idColumn(): string {
    return 'id'
  }
}
