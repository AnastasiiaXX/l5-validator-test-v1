export default class NumberSchema {
  validators = [(value) => typeof value === 'number'];

  isValid(value) {
    const checks = this.validators.map((validator) => validator(value));
    return !checks.includes(false);
  }

  odd() {
    const validator = (value) => value % 2 !== 0;
    this.validators.push(validator);
    return this;
  }

  even() {
    const validator = (value) => value % 2 === 0;
    this.validators.push(validator);
    return this;
  }
}
