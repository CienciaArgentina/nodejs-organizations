import { JSONSchema7 } from 'json-schema'

export const postOrganizationBody: JSONSchema7 = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            maxLength: 50
        },
        acronym: {
            type: ['string', 'null']
        },
        summary: {
            type:['string', 'null']
        },
        description: {
            type:['string', 'null'],
            minLength: 20,
            maxLength: 600
        },
        website: {
            type:['string', 'null']
        }
    }
}