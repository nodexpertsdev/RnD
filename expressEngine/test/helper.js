import { connect } from 'mongoose';
import inMemoryDB from './db';


let db;

before(async () => {
  const { mongoUri } = await inMemoryDB();
  db = await connect(mongoUri, { useCreateIndex: true, useNewUrlParser: true });
});

after(() => {
  db.disconnect();
});
