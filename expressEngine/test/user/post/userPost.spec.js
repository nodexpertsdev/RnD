import chai from 'chai';
import chaiHttp from 'chai-http';
import { connect } from 'mongoose';
import server from '../../../server';
import inMemoryDB from '../../inMemoryDb';
import { error, success } from '../../data';

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
        .post(success.userRoute)
        .set(success.header)
        .send({ email: success.email[0], password: success.password });
      result.should.have.status(success.status);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

    describe('check for wrong email format', () => {
      it('Without email field', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ password: success.password });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('With email as blank space', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: error.email.empty, password: success.password });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Without @ operator', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: error.email.withoutAtOperator, password: success.password });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Without period(dot) ', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: error.email.withoutPeriod, password: success.password });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Without alphabetic characters', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: error.email.withoutAlphabets, password: success.password });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Without Numeric characters gives success', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[1], password: success.password });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for wrong password format ', () => {
      it('Without password field', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[0] });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Password with blank space', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[0], password: error.password.empty });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Less than 8 characters', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[0], password: error.password.characterCount });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Without any capital alphabet', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[0], password: error.password.withoutCapitalAlphabet });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Without any small alphabet', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[0], password: error.password.withoutSmallAlphabet });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Without any Number', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[0], password: error.password.withoutNumber });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Without any special character', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[0], password: error.password.withoutSpecialCharacter });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });
    });

    describe('check for role', () => {
      it('With role field as supplier', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[2], password: success.password, role: success.role.supplier });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

      it('With role field as system-admin', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[3], password: success.password, role: success.role.systemAdmin });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

      it('With role field as random string', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: 'Ab@gmail.com', password: success.password, role: error.role.randomString });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });
    });

    describe('check for company name', () => {

      it('With company name as a random string', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[4], password: success.password, companyName: success.companyName });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for contact name', () => {
      it('With contactName as a random string', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[5], password: success.password, contactName: success.contactName });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for contact title', () => {
      it('With contactTitle as a random string', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[6], password: success.password, contactTitle: success.companyName });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for city', () => {
      it('With city as a random string', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[7], password: success.password, city: success.city });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for country', () => {
      it('With country as a random string', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[8], password: success.password, country: success.country });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for phone', () => {
      it('With phone as a random string', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[9], password: success.password, phone: error.phone });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('With phone as a random number', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[9], password: success.password, phone: success.phone });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for fax', () => {
      it('With fax as a random string', async () => {
        const result = await chai.request(server)
          .post(success.userRoute)
          .set(success.header)
          .send({ email: success.email[10], password: success.password, fax: success.fax });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });
  });
});
