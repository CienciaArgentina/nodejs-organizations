import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export class Address extends Model {
    
 static tableName = TableNames.Address;

  street_name!: string
  street_number!: string
  zip_code!: string
  locality_id!: string
  additionals?: string
  latitude?: string | null
  longitude?: string | null

}
