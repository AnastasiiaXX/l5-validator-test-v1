/* validators = [
    (value) => typeof value === 'string',
    // eslint-disable-next-line max-len
    (value) => typeof value === 'string' && value.includes('MD5')
    || value.includes('SHA1') || value.includes('SHA256') || value.includes('SHA512'),
  ];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  setHashAlgorithmConstraint(alg) {
    const validator = (value) => (value != null ? value.includes(alg) === true : false);
    this.validators.push(validator);
    return this;
  } */
