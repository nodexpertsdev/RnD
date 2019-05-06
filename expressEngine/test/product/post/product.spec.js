import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { error, success } from '../../data';

const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);

describe('ProductPost', () => {
  describe('Post function in api/products/', () => {
    it('create a product using proper supplierId', async () => {
      const result = await chai
        .request(server)
        .post(success.productRoute)
        .set(success.header)
        .send({
          supplierId: error.supplierId.properId,
          name: success.name,
          unitPrice: success.unitPrice,
        });
      result.should.have.status(success.status);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

    describe('Check for wrong supplierId format', () => {
      it('Without supplierId field', async () => {
        const result = await chai
          .request(server)
          .post(success.productRoute)
          .set(success.header)
          .send({});
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      it('Should be string', async () => {
        const result = await chai
          .request(server)
          .post(success.productRoute)
          .set(success.header)
          .send({ supplierId: error.supplierId.number });
        result.should.have.status(error.status);
        result.body.should.have.property('error');
      });

      describe('Check for name field', () => {
        it('Name field as blank space', async () => {
          const result = await chai
            .request(server)
            .post(success.productRoute)
            .set(success.header)
            .send({
              name: error.name.empty,
            });
          result.should.have.status(error.status);
          result.body.should.have.property('error');
        });
        it('With name as a random string', async () => {
          const result = await chai
            .request(server)
            .post(success.productRoute)
            .set(success.header)
            .send({
              supplierId: error.supplierId.properId,
              name: success.name,
              unitPrice: success.unitPrice,
            });
          result.should.have.status(success.status);
          result.body.should.have.property('data');
          result.body.should.have.property('message');
        });
      });

      describe('check for unitPrice field', () => {
        it('unitPrice field as blank space', async () => {
          const result = await chai
            .request(server)
            .post(success.productRoute)
            .set(success.header)
            .send({
              unitPrice: error.unitPrice.empty,
            });
          result.should.have.status(error.status);
          result.body.should.have.property('error');
        });
        it('unitPrice field as string value', async () => {
          const result = await chai
            .request(server)
            .post(success.productRoute)
            .set(success.header)
            .send({
              unitPrice: error.unitPrice.withString,
            });
          result.should.have.status(error.status);
          result.body.should.have.property('error');
        });
        it('With unitPrice as a random number', async () => {
          const result = await chai
            .request(server)
            .post(success.productRoute)
            .set(success.header)
            .send({
              supplierId: error.supplierId.properId,
              name: success.name,
              unitPrice: success.unitPrice,
            });
          result.should.have.status(success.status);
          result.body.should.have.property('data');
          result.body.should.have.property('message');
        });
      });

      describe('Check for package field', () => {
        it('With package as a random string', async () => {
          const result = await chai
            .request(server)
            .post(success.productRoute)
            .set(success.header)
            .send({
              supplierId: error.supplierId.properId,
              name: success.name,
              unitPrice: success.unitPrice,
              package: success.productPackage,
            });
          result.should.have.status(success.status);
          result.body.should.have.property('data');
          result.body.should.have.property('message');
        });
      });

      describe('Check for isDiscontinued field', () => {
        it('With isDiscontinued as a boolean value', async () => {
          const result = await chai
            .request(server)
            .post(success.productRoute)
            .set(success.header)
            .send({
              supplierId: error.supplierId.properId,
              name: success.name,
              unitPrice: success.unitPrice,
              isDiscontinued: success.isDiscontinued,
            });
          result.should.have.status(success.status);
          result.body.should.have.property('data');
          result.body.should.have.property('message');
        });
      });
    });
  });
});
