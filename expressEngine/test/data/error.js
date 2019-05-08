const email = {
  empty: '',
  withoutAlphabets: '123@342.34',
  withoutAtOperator: 'Abcm.com',
  withoutNumber: 'Abcm@cdf.om',
  withoutPeriod: 'Abcm@com',
};

const password = {
  characterCount: 'Aa4@bc',
  empty: '',
  withoutCapitalAlphabet: 'abc@1234',
  withoutNumber: 'abc@aaaaa',
  withoutSmallAlphabet: 'ABC@1234',
  withoutSpecialCharacter: 'abcAB1234',
};

const role = {
  randomString: 'fdsa',
};

const error = {
  email,
  password,
  role,
  phone: 'abcd',
  status: 500,
};

export default error;
