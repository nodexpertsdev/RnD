import chai from 'chai';
import chaiHttp from 'chai-http';
import { connect } from 'mongoose';
import server from '../server';
import inMemoryDB from './inMemoryDb';

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

describe('Users', () => {
  describe('Post function in api/user/', () => {
    it('register a user using given email and id', async () => {
      const result = await chai.request(server)
        .post('/api/user')
        .set({ authkey: 'successive' })
        .send({ email: 'Abc@gmaisfgd.com', password: 'Aa42@abc' });
      result.should.have.status(200);
      result.body.should.have.property('data');
    });

    describe('check for wrong email format', () => {

      it('Without @ operator', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm.com', password: 'Aa42@abc' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('Without period(dot) ', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@com', password: 'Aa42@abc' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });
      
      it('Without alphabetic characters', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: '123@342.34', password: 'Aa42@abc' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('Without Numeric characters gives success', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@cdf.om', password: 'Aa42@abc' });
        result.should.have.status(200);
        result.body.should.have.property('data');
      });
    });

    describe('check for wrong password format ', () => {
      it('Less than 8 characters', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com', password: 'Aa4bc' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('Without any capital alphabet', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com', password: 'abc@1234' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('Without any small alphabet', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com', password: 'ABC@1234' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('Without any Number', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com', password: 'abc@aaaaa' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('Without any special character', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com', password: 'abcAB1234' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });
    });
  });
});
