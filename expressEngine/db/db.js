import { connect, disconnect } from 'mongoose';
import LOCAL_URL from '../utils/config';

const dbUrls = {
  local: LOCAL_URL,
};

const { MONGO_URL } = process.env;

let env = MONGO_URL || 'local';

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
