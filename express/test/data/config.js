const header = {
  authkey: 'successive',
};

const route = {
  product: '/api/products',
  user: '/api/user',
  customer: '/api/customer'
};

const status = {
  internalServerError: 500,
  ok: 200,
};

export default {
  header,
  route,
  status,
};
