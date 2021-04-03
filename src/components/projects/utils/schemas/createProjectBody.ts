import { JSONSchema7 } from 'json-schema'

export const createProjectBody:JSONSchema7 = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1
    },
    description: {
      type: ['string', 'null'],
      minLength: 1
	},
	experimental_model: {
		type: ['string', 'null'],
		minLength: 1
	  },
    website: {
      type: ['string', 'null'],
      pattern: "^(?:https?:\/\/)([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)(?:[\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$"
    },
    department_id: {
      type: 'number',
      minimum:1
    },
    project_head: {
      type: ['string', 'null'],
      minLength: 1
    }
  }
}

