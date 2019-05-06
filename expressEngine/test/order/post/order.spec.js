import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { error, success } from '../../data';

const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);

describe('orderPost', () => {
  describe('Post function in api/order/', () => {
    it('Generate order testing', async () => {
      const result = await chai
        .request(server)
        .post(success.orderRoute)
        .set(success.header)
        .send({
          orderNumber: success.randomNumber,
          supplierId: success.randomString,
          unitPrice: success.randomNumber,
          status: success.randomString,
        });
      result.should.have.status(success.status);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

    describe('Check for order number', () => {
      it('Without order number', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Order number as empty string', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: '',
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Order number as random string', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomString,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Order number with number', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('Check for supplier id', () => {
      it('Without supplier id', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Supplier id as empty string', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: '',
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Supplier id as random string', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

      it('Supplier id with number', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomNumber,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('Check for unit price', () => {
      it('Without unit price', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            status: success.randomString,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Unit price as empty string', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            unitPrice: '',
            status: success.randomString,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Supplier id as random string', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            unitPrice: success.randomString,
            status: success.randomString,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Unit price with number', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomNumber,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });


    describe('Check for status', () => {
      it('Without status', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Status as empty string', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
            status: '',
          });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Status as random string', async () => {
        const result = await chai
          .request(server)
          .post(success.orderRoute)
          .set(success.header)
          .send({
            orderNumber: success.randomNumber,
            supplierId: success.randomString,
            unitPrice: success.randomNumber,
            status: success.randomString,
          });
        result.should.have.status(success.status);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });

    });
  });
});
