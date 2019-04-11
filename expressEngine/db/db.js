import { connect, disconnect } from 'mongoose';

const dbUrls = {
  local: 'mongodb://localhost:27017/rnd',
};

let env = process.env.ENV || 'local';

env = (dbUrls[env] && env) || 'local'; // if no url configured for env then connect to local env

const db = {
  url: dbUrls[env],
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
};

const open = () => connect(db.url, db.options);
const close = () => disconnect(db.url, db.options);

export default {
  open,
  close,
};
