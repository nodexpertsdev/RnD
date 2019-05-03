const role = {
  supplier: 'supplier',
  systemAdmin: 'system-admin',
};

const valid = ['Abc@gmail.com', 'abc@gmail.com', 'abcd@gmail.com', 'aBc@gmail.com', 'abC@gmail.com', 'abd@gmail.com', 'sdf@gmail.com', 'df@gmail.com', 'sdflj@gmail.com', 'ldf@gmic.com', 'd@gmail.com'];
const success = {
  role,
  header: { authkey: 'successive' },
  userRoute: '/api/user',
  status: 200,
  email: valid,
  password: 'Aa42@abc',
  companyName: 'sdf',
  contactName: 'abc',
  contactTitle: 'abc',
  city: 'abcde',
  country: 'aaaaaaa',
  phone: 43545,
  fax: 'abbbbbb',
};

export default success;
