/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { error, success, config } from '../../data';

const should = chai.should();
chai.use(chaiHttp);

describe('orderPost', () => {
  const { header, status, route } = config;
  const { order } = route;
  const { ok, internalServerError } = status;

  describe(`post function in ${order}`, () => {
    it('should generate order', async () => {
      const result = await chai
        .request(server)
        .post(order)
        .set(header)
        .send({
          orderNumber: success.randomNumber,
          status: success.randomString,
          supplierId: success.randomString,
          unitPrice: success.randomNumber,
        });
      result.should.have.status(ok);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

    describe('check for order number', () => {
      it('should fail without order number', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            status: success.randomString,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for order number as empty string', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: '',
            status: success.randomString,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for order number as random string', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomString,
            status: success.randomString,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should pass for order number as number', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for supplier id', () => {
      it('should fail without supplier id', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for supplier id as empty string', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: '',
            unitPrice: success.randomNumber,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should pass for supplier id as random string', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

      it('should pass for supplier id as number', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: success.randomNumber,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for unit price', () => {
      it('should fail without unit price', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: success.randomString,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for unit price as empty string', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: success.randomString,
            unitPrice: '',
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for unit price as random string', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: success.randomString,
            unitPrice: success.randomString,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should pass for unit price as number', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: success.randomNumber,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for status', () => {
      it('should fail without status', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should fail for status as empty string', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: '',
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should pass for status as random string', async () => {
        const result = await chai
          .request(server)
          .post(order)
          .set(header)
          .send({
            orderNumber: success.randomNumber,
            status: success.randomString,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });
  });
});
