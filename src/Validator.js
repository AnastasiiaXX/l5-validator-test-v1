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
/* export default class Validator {
  number() {
    return {
      isValid(value) {
        return typeof value === 'number';
      },
      integers() {
        return {
          isValid(value) {
            return Number.isInteger(value);
          },
        };
      },
    };
  }

  array() {
    return {
      isValid(value) {
        return Array.isArray(value);
      },
      integers() {
        return {
          isValid(value) {
            if (!Array.isArray(value)) {
              return false;
            }
            return value.every((element) => Number.isInteger(element));
          },
        };
      },
      custom(callback) {
        return {
          isValid(value) {
            if (!Array.isArray(value)) {
              return false;
            }
            return value.every(callback);
          },
        };
      },
    };
  }

  object() {
    return {
      shape(schema) {
        return {
          isValid(value) {
            if (typeof value !== 'object' || Array.isArray(value) || value === null) {
              return false;
            }
            return Object.entries(schema).every(([key, validator]) => {
              const propertyValue = value[key];
              return validator && validator.isValid(propertyValue);
            });
          },
        };
      },
    };
  }
}
*/
