export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  length(number) {
    const validator = (value) => (value !== null ? value.length === number : false);
    return new ArraySchema([...this.validators, validator]);
  }
}
// validators = [(value) => Array.isArray(value)];
/* isValid(value) {
    const checks = this.validators.map((validator) => validator(value));
    return !checks.includes(false);
  }
   length(number) {
    const validator = (value) => (value !== null ? value.length === number : false);
    this.validators.push(validator);
    return this;
  } */
