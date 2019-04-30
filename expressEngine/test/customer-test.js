import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import server from '../server';
import inMemoryDB from './inMemoryDb';
import { Customer } from '../model';

const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);
let db;
before(async () => {
  const { mongoUri } = await inMemoryDB();
  db = await mongoose.connect(mongoUri, { useCreateIndex: true, useNewUrlParser: true });
});

after(async () => {
  db.disconnect();
});

describe('Users', () => {
  describe('Get function in api/customer', () => {
    it('should show list of customers', async () => {
      const mockCustomer = { name: 'test', email: 'test2gmail.com', city: 'Noida', country: 'India', contactNo: 1234567890 };
      await Customer.create(mockCustomer);
      const result = await chai.request(server)
        .get('/api/customer')
        .set({ authkey: 'successive' });
      result.should.have.status(200);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });
    it('should show forbidden message when no authkey is provided', async () => {
      const result = await chai.request(server)
        .get('/api/customer');
      result.should.have.status(403);
      result.body.should.have.property('error');
      result.body.should.have.property('message');
    });
  });
});
