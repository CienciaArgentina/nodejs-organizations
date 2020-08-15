import { JSONSchema7 } from 'json-schema'

export const postOrganizationBody: JSONSchema7 = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            maxLength: 16
        }
    }
}