import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { error, success } from '../../data/product';
import { config } from '../../data';


const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);
const { header, route, status } = config;
const { product } = route;
const { ok, internalServerError } = status;
const {
  isDiscontinued, name, productPackage, supplierId, unitPrice,
} = success;
const { id, price, empty } = error;
const { number } = id;
const { withString } = price;

describe('productPost', () => {
  describe(`post function in ${product}`, () => {
    it('should create a product using proper supplierId', async () => {
      const result = await chai
        .request(server)
        .post(product)
        .set(header)
        .send({
          name,
          supplierId,
          unitPrice,
        });
      result.should.have.status(ok);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

    describe('check for wrong supplierId format', () => {
      it('should fail without supplierId', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            name,
            unitPrice,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });

      it('should not be number', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            name,
            supplierId: number,
            unitPrice,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
    });

    describe('check for name', () => {
      it('should fail for  blank space', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            name: empty,
            supplierId,
            unitPrice,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
      it('should pass name as a random string', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            name,
            supplierId,
            unitPrice,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for unitPrice field', () => {
      it('should fail for  blank space', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            name,
            supplierId,
            unitPrice: empty,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
      it('should pass as string value', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            name,
            supplierId,
            unitPrice: withString,
          });
        result.should.have.status(internalServerError);
        result.body.should.have.property('error');
      });
      it('should pass as a random number', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            name,
            supplierId,
            unitPrice,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for package field', () => {
      it('should pass as a random string', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            name,
            package: productPackage,
            supplierId,
            unitPrice,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });

    describe('check for isDiscontinued field', () => {
      it('should pass as a boolean value', async () => {
        const result = await chai
          .request(server)
          .post(product)
          .set(header)
          .send({
            isDiscontinued,
            name,
            supplierId,
            unitPrice,
          });
        result.should.have.status(ok);
        result.body.should.have.property('data');
        result.body.should.have.property('message');
      });
    });
  });
});
