
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { error, success } from '../mockData';
import { config } from '../../data';

const should = chai.should();
chai.use(chaiHttp);

describe('CustomerPost', () => {
  const { header, route, status } = config;
  const { customer } = route;
  const { ok, internalServerError } = status;
  const { city, contactNo, country, email, name } = success;

  // describe(`post function in ${customer}`, () => {
    describe(`possible pass cases in ${customer}`, () => {

    it('should register a customer using given email, contact number, name, city and country', async () => {
      const result = await chai
        .request(server)
        .post(customer)
        .set(header)
        .send({ city, contactNo, country, email, name });
      result.should.have.status(ok);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

  });
  describe(`possible failure cases in ${customer}`, () => {

    describe('check for wrong email format', () => {
      const {
        empty,
        withoutAtOperator,
        withoutAlphabets,
        withoutPeriod,
      } = error.email;

      it('should fail without email', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, country, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for blank email', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, country, email: empty, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without @ operator', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, country, email: withoutAtOperator, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without period(dot) ', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, country, email: withoutPeriod, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for email without alphabetic characters', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, country, email: withoutAlphabets, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
    });

    describe('check for contact number ', () => {
      const {
        empty,
        numberCount,
      } = error.contactNo;

      it('should fail without contact number', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, country, email, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for blank contact number', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo: empty, country, email, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for contact number not having 10 digits', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo: numberCount, country, email, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
    })

    describe('check for contact name', () => {

      it('should fail if name is not given', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, country, email });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail if name is empty', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, country, email, name: '' });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

    });

    describe('check for city', () => {

      it('should fail if city is not given', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ contactNo, country, email, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail if city is empty', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city: '', contactNo, country, email, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

    });

    describe('check for country', () => {

      it('should fail if country is not given', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, email, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail if country is empty', async () => {
        const result = await chai
          .request(server)
          .post(customer)
          .set(header)
          .send({ city, contactNo, country: '', email, name });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

    });
})
});
