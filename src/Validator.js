import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  // eslint-disable-next-line
  number() {
    return new NumberSchema([(value) => typeof value === 'number']);
  }

  // eslint-disable-next-line
  array() {
    return new ArraySchema([(value) => Array.isArray(value)]);
  }

  // eslint-disable-next-line
  object() {
    return new ObjectSchema();
  }
}
