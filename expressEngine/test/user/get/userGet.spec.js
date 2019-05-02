import chai from 'chai';
import chaiHttp from 'chai-http';
import { connect } from 'mongoose';
import server from '../../../server';
import inMemoryDB from '../../inMemoryDb';

const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);
let db;
before(async () => {
  const { mongoUri } = await inMemoryDB();
  db = await connect(mongoUri, { useCreateIndex: true, useNewUrlParser: true });
});

after(async () => {
  db.disconnect();
});
//NOT WORKING
describe('Users', () => {
  describe('Get function in api/user/', () => {
    it('check get request', async () => {
      const result = await chai.request(server)
        .get('/api/user')
        .set({ authkey: 'successive' });
      result.should.have.status(200);
      // result.body.should.have.property('data');
    });
  });
});
