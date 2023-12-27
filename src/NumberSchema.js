export default class NumberSchema {
  // набор валидаторов
  // функция проверки на число по умолчанию, далее могут добавляться другие функции с проверками
  // массив с функциями чтобы не писать много if-ов
  // проходим по всем валидаторам, которые вызваны и передаем в валидатор значение,
  // которое хотим проверить
  // ***IMMUTABLE solution
  // метод every проверяет каждое возвращаемое значение на true (similar to map)

  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  odd() {
    const validator = (value) => value % 2 !== 0;
    return new NumberSchema([...this.validators, validator]);
  }

  even() {
    const validator = (value) => value % 2 === 0;
    return new NumberSchema([...this.validators, validator]);
  }
}
// ***solution with mutations
// validators = [(value) => typeof value === 'number'];
/* isValid(value) {
    const checks = this.validators.map((validator) => validator(value));
    // если хотя бы один из валидаторов вернул false, возвращаем false
    // map возвращает массив булевых значений
    // if (checks.includes false) return false, else return true
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
<<<<<<< HEAD
  } */

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
