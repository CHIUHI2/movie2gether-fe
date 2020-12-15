const PASSWORD_VALIDATION_REGEX = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
const EMAIL_VALIDATION_REGEX = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);

export { PASSWORD_VALIDATION_REGEX, EMAIL_VALIDATION_REGEX };
