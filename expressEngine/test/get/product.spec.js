import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import server from '../../server';
import inMemoryDB from '../inMemoryDb';
import { Product } from '../../model';
import { product, authKey } from '../utils/dataFields';
import { productRoute } from '../utils/routeFields';

const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);
let db;
before(async () => {
  const { mongoUri } = await inMemoryDB();
  db = await mongoose.connect(mongoUri, { useCreateIndex: true, useNewUrlParser: true });
});

after(async () => {
  db.disconnect();
});

describe('Products', () => {
  describe('Get function in api/products', () => {
    // it('should show list of products', async () => {
    //   const mockProduct = product;
    //   await Product.create(mockProduct);
    //   const result = await chai.request(server)
    //     .get(productRoute)
    //     .set({ authkey: authKey });
    //   result.should.have.status(200);
    //   result.body.should.have.property('data');
    //   result.body.should.have.property('message');
    // });
    it('should show forbidden message when no authkey is provided', async () => {
      const result = await chai.request(server)
        .get(productRoute);
      result.should.have.status(403);
      result.body.should.have.property('error');
      result.body.should.have.property('message');
    });
  });
});
