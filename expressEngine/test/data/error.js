const email = {
  withoutAlphabets: '123@342.34',
  withoutAtOperator: 'Abcm.com',
  withoutNumber: 'Abcm@cdf.om',
  withoutPeriod: 'Abcm@com',
};

const supplierId = {
  number: 123456786565,
  properId: '5cad7772336be17a34ca44db',
};

const unitPrice = {
  withString: 'sfdsafa',
};

const password = {
  characterCount: 'Aa4@bc',
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
  empty: '',
  password,
  phone: 'abcd',
  role,
  status: 500,
  supplierId,
  unitPrice,
  userId: 1234,
};

export default error;
