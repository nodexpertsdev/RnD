import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

beforeEach((done) => {
  mongoServer = new MongoMemoryServer();
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
  mongoServer.stop();
});
