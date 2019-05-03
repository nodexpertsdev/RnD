const email = {
  empty: '',
  withoutAtOperator: 'Abcm.com',
  withoutPeriod: 'Abcm@com',
  withoutAlphabets: '123@342.34',
  withoutNumber: 'Abcm@cdf.om',
};

const password = {
  empty: '',
  characterCount: 'Aa4@bc',
  withoutCapitalAlphabet: 'abc@1234',
  withoutSmallAlphabet: 'ABC@1234',
  withoutNumber: 'abc@aaaaa',
  withoutSpecialCharacter: 'abcAB1234',
};

const role = {
  randomString: 'fdsa',
};

const error = {
  email,
  password,
  role,
  status: 500,
  phone: 'abcd',
};

export default error;
