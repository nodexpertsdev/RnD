import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer({
  autoStart: false,
});

export default async () => {
  if (!mongod.runningInstance) {
    await mongod.start();
  }

  return {
    mongoDBName: 'RnD',
    mongoUri: await mongod.getConnectionString(),
  };
};
