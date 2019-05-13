import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

beforeEach((done) => {
  const mongoServer = new MongoMemoryServer();
  mongoServer
    .getConnectionString()
    .then((mongoUri) => {
      return mongoose.connect(mongoUri, (err) => {
        if (err) done(err);
      });
    })
    .then(() => done());
});

afterEach(() => {
  mongoose.disconnect();
});
