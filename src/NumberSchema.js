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
/* class Hours {
  validators = [(value) => typeof value === 'number' && value >= 0 && Number.isInteger(value)];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  setRange(min, max) {
    const validator = (value) => (value != null ? value < max : false);
    this.validators.push(validator);
    return this;
  }
} */
