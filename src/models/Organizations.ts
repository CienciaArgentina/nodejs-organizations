import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export default class Organizations extends Model {
  Id!: number;
  description!: string;
  dateCreated!: Date;
  dateDeleted?: Date;

  static tableName = TableNames.Organization;
}
