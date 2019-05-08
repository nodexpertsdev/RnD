/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { error, success, config } from '../../data';

const should = chai.should();
chai.use(chaiHttp);

describe('UserPost', () => {
  const { header, route, status } = config;
  const { user } = route;
  const { ok, internalServerError } = status;
  const { email, password } = success;

  describe(`post function in ${user}`, () => {
    it('should register a user using given email and password', async () => {
      const result = await chai
        .request(server)
        .post(user)
        .set(header)
        .send({ email: email[0], password });
      result.should.have.status(ok);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

    describe('check for wrong email format', () => {
      const {
        empty,
        withoutAtOperator,
        withoutAlphabets,
        withoutPeriod,
        withoutNumber,
      } = error.email;

      it('should fail without email', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({ password });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for blank email', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({ email: empty, password });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without @ operator', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: withoutAtOperator,
            password,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without period(dot) ', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: withoutPeriod,
            password,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without alphabetic characters', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: withoutAlphabets,
            password,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should pass for email without number', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({ email: withoutNumber, password });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for password ', () => {
      const {
        characterCount,
        empty,
        withoutCapitalAlphabet,
        withoutNumber,
        withoutSpecialCharacter,
        withoutSmallAlphabet,
      } = error.password;

      it('should fail without password', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({ email: email[0] });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for password with blank space', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({ email: email[0], password: empty });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for password less than 8 characters', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[0],
            password: characterCount,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for password without any capital alphabet', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[0],
            password: withoutCapitalAlphabet,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for password without any small alphabet', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[0],
            password: withoutSmallAlphabet,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for password without any Number', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[0],
            password: withoutNumber,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for password without any special character', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[0],
            password: withoutSpecialCharacter,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
    });

    describe('check for role', () => {
      const { supplier, systemAdmin } = success.role;
      const { randomString } = error.role;

      it('should pass for role as supplier', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[2],
            password,
            role: supplier,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

      it('should pass for role  as system-admin', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[3],
            password,
            role: systemAdmin,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

      it('should fail for role as random string', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: 'Ab@gmail.com',
            password,
            role: randomString,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
    });

    describe('check for company name', () => {
      const { companyName } = success;

      it('should pass for company name as a random string', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            companyName,
            email: email[4],
            password,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for contact name', () => {
      const { contactName } = success;

      it('should pass for contact name as a random string', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            contactName,
            email: email[5],
            password,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for contact title', () => {
      const { contactTitle } = success;

      it('should pass for contact title as a random string', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            contactTitle,
            email: email[6],
            password,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for city', () => {
      const { city } = success;

      it('should pass for city as a random string', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            city,
            email: email[7],
            password,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for country', () => {
      const { country } = success;

      it('should pass for country as a random string', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            country,
            email: email[8],
            password,

          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for phone', () => {
      it('should fail for phone as a random string', async () => {
        const { phone } = error;

        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[9],
            password,
            phone,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should pass for phone as a random number', async () => {
        const { phone } = success;

        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[9],
            password,
            phone,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for fax', () => {
      const { fax } = success;

      it('should pass for fax as a random string', async () => {
        const result = await chai
          .request(server)
          .post(user)
          .set(header)
          .send({
            email: email[10],
            fax,
            password,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });
  });
});
