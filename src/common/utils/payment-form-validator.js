import { CVC_MATCH_REGEX } from '../constants/regex';

const validateCreditCardNumber = ({ getFieldValue }) => ({
  validator() {
    if (getFieldValue('cardNum').length > 16) {
      return Promise.reject('Invalid card number');
    }

    if (!/^[45][0-9]{15}$/.test(getFieldValue('cardNum'))) {
      return Promise.reject('Invalid card number');
    }

    return Promise.resolve();
  },
});

const validateCVC = ({ getFieldValue }) => ({
  validator() {
    if (getFieldValue('cvc').length > 3) {
      return Promise.reject('Invalid CVC code');
    }

    if (!CVC_MATCH_REGEX.test(getFieldValue('cvc'))) {
      return Promise.reject('Invalid CVC code');
    }

    return Promise.resolve();
  },
});

const validateExpiryDate = ({ getFieldValue }) => ({
  validator() {
    if (!/(0[1-9]|10|11|12)\/20[0-9]{2}$/.test(getFieldValue('date'))) {
      return Promise.reject('Invalid expiry date');
    }

    const dateArr = getFieldValue('date').split('/');
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const currentDate = new Date(year, month);
    const inputDate = new Date(dateArr[1], dateArr[0] - 1);
    if (inputDate < currentDate) {
      return Promise.reject('Invalid expiry date');
    }

    return Promise.resolve();
  },
});

const validateName = ({ getFieldValue }) => ({
  validator() {
    if (!/^[A-Za-z- ]+$/.test(getFieldValue('name'))) {
      return Promise.reject('Invalid name');
    }

    return Promise.resolve();
  },
});

export { validateCreditCardNumber, validateCVC, validateExpiryDate, validateName };
