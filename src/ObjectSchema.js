export default class ObjectSchema {
  constructor(shapes) {
    this.validators = shapes;
  }
  // eslint-disable-next-line
  shape(fields) {
    return new ObjectSchema(fields);
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }
    return keys.every((key) => this.validators[key].isValid(value[key]));
  }
}
/* validators = {};

  shape(fields) {
    const keys = Object.keys(fields);
    // eslint-disable-next-line no-return-assign
    keys.map((key) => this.validators[key] = fields[key]);
    return this;
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }
    const validations = keys.map((key) => this.validators[key].isValid(value[key]));
    return !validations.includes(false);
  } */
