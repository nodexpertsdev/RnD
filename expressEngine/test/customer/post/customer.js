
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { error, success } from '../cms';
import { config } from '../../data';

const should = chai.should();
chai.use(chaiHttp);

describe('CustomerPost', () => {
  const { header, route, status } = config;
  const { customer } = route;
  const { ok, internalServerError } = status;
  const { email, contactNo, name, city, country } = success;

  describe(`post function in ${customer}`, () => {
    it('should register a customer using given email, contact number, name, city and country', async () => {
      const result = await chai
        .request(server)
        .post(customer)
        .set(header)
        .send({ email, name, city, country, contactNo });
      console.log('------------', result.body);
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
          .post(customer)
          .set(header)
          .send({ name, city, country, contactNo });
        console.log('----++++++++', result.body);
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for blank email', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ email: empty, name, city, country, contactNo });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without @ operator', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ email: withoutAtOperator, name, city, country, contactNo });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without period(dot) ', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ email: withoutPeriod, name, city, country, contactNo });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without alphabetic characters', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ email: withoutAlphabets, name, city, country, contactNo });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without number', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ email: withoutNumber, name, city, country, contactNo });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
    });

    describe('check for contact number ', () => {
      const {
        numberCount,
        empty,
      } = error.contactNo;

      it('should fail without contact number', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ email, name, city, country });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for contact number with blank space', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ contactNo: empty, email, name, city, country });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for contact number not having 10 digits', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ contactNo: numberCount, email, name, city, country });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
    })

    describe('check for contact name', () => {

      it('should pass for contact name as a random string', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ name, email, city, country, contactNo});
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for city', () => {

      it('should pass for city as a random string', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, email, name, country, contactNo});
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for country', () => {

      it('should pass for country as a random string', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ country, email, name, city, contactNo});
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });
})
});
