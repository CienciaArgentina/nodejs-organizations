import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export class User extends Model {

	user_id!: string

  static tableName = TableNames.User;

  static relationMappings = {
    organization: {
		relation: Model.HasManyRelation,
		modelClass: require('./Organization').Organization,
		join: {
			from: 'userprofiles.id',
			through: {
				from: 'user_organization.organization_id',
				to: 'user_organization.user_id'
			},
			to: 'organization.id'
		}
	},
}

}
