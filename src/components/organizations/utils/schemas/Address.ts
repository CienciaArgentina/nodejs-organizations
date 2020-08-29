import { JSONSchema7 } from 'json-schema'

export const Address: JSONSchema7 = {
  type: 'object',
  properties: {
    street_name: {
      type: 'string'
    },
    street_number: {
      type: ['string']
    },
    zip_code: {
      type: ['string']
    },
    additionals: {
      type: ['string']
    },
    locality_id: {
      type: ['number']
    }
  },
  required: ['street_name','street_number','zip_code','locality_id']
}