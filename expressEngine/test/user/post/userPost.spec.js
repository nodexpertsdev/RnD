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

describe('UserPost', () => {
  describe('Post function in api/user/', () => {
    it('register a user using given email and id', async () => {
      const result = await chai.request(server)
        .post('/api/user')
        .set({ authkey: 'successive' })
        .send({ email: 'Abc@gmaisfgd.com', password: 'Aa42@abc' });
      result.should.have.status(200);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

    describe('check for wrong email format', () => {
      it('Without email field', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: '', password: 'Aa42@abc' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('With email as blank space', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: '', password: 'Aa42@abc' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

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
        result.body.should.have.property('message');
      });
    });

    describe('check for wrong password format ', () => {
      it('Without password field', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('Password with blank space', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com', password: '' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

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

    describe('check for role', () => {
      it('With role field as supplier', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com', password: 'abcAB1@234', role: 'supplier' });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

      it('With role field as system-admin', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abc@gmail.com', password: 'abcAB1@234', role: 'system-admin' });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

      it('With role field as random string', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Ab@gmail.com', password: 'abcAB1@234', role: 'abadfsf' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('With role field as numbers', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Ab@gmail.com', password: 'abcAB1@234', role: '23434' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('With role field as customer', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcm@gmail.com', password: 'abcAB1@234', role: 'customer' });

        result.should.have.status(500);
        result.body.should.have.property('error');
      });
    });

    describe('check for companyName', () => {
      it('With company name as a random string', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Abcd@gmail.com', password: 'abcAB1@234', companyName: 'abcd' });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for contactName', () => {
      it('With companyName as a random string', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Aacd@gmail.com', password: 'abcAB1@234', cotactName: 'abcd' });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for contactTitle', () => {
      it('With contactTitle as a random string', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Aacdd@gmail.com', password: 'abcAB1@234', contactTitle: 'abcd' });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for city', () => {
      it('With city as a random string', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Aac1d@gmail.com', password: 'abcAB1@234', city: 'abcd' });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for country', () => {
      it('With country as a random string', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Aacad@gmail.com', password: 'abcAB1@234', country: 'abcd' });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for phone', () => {
      it('With phone as a random string', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Aac2d@gmail.com', password: 'abcAB1@234', phone: 'abcd' });
        result.should.have.status(500);
        result.body.should.have.property('error');
      });

      it('With phone as a random number', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Aac2d@gmail.com', password: 'abcAB1@234', phone: 1234 });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for fax', () => {
      it('With fax as a random string', async () => {
        const result = await chai.request(server)
          .post('/api/user')
          .set({ authkey: 'successive' })
          .send({ email: 'Aac3ad@gmail.com', password: 'abcAB1@234', fax: 'abcd' });
        result.should.have.status(200);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });
  });
});
