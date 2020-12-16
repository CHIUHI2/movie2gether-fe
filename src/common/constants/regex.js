const PASSWORD_VALIDATION_REGEX = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
const EMAIL_VALIDATION_REGEX = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);
const VISA_TYPE_MATCH_REGEX = new RegExp(/^[4][0-9]*$/);
const MASTER_TYPE_MATCH_REGEX = new RegExp(/^[5][0-9]*$/);
const CVC_MATCH_REGEX = new RegExp(/^[0-9]{3}$/);

export {
  PASSWORD_VALIDATION_REGEX,
  EMAIL_VALIDATION_REGEX,
  VISA_TYPE_MATCH_REGEX,
  MASTER_TYPE_MATCH_REGEX,
  CVC_MATCH_REGEX,
};
