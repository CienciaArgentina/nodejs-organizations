import { JSONSchema7 } from 'json-schema'
import { Address } from './Address'
export const postOrganizationBody: JSONSchema7 = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1
    },
    address: Address,
    acronym: {
      type: ['string', 'null']
    },
    summary: {
      type: ['string', 'null']
    },
    description: {
      type: ['string', 'null'],
      minLength: 5,
      maxLength: 1000
    },
    website: {
      type: ['string', 'null'],
      pattern: "^(?:https?:\/\/)([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)(?:[\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$"
    }
  },
  required: ['name','address']
}