import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';

export default class Validator {
  // eslint-disable-next-line
  number() {
    return new NumberSchema();
  }

  // eslint-disable-next-line
  array() {
    return new ArraySchema();
  }
}
