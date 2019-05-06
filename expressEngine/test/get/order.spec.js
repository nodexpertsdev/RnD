import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import server from '../../server';
import inMemoryDB from '../inMemoryDb';
import { Order } from '../../model';
import { order, authKey } from '../utils/dataFields';
import { orderRoute } from '../utils/routeFields';

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

describe('Orders', () => {
  describe('Get function in api/order', () => {
    // it('should show list of orders', async () => {
    //   const mockOrder = order;
    //   await Order.create(mockOrder);
    //   const result = await chai.request(server)
    //     .get(orderRoute)
    //     .set({ authkey: authKey });
    //   result.should.have.status(200);
    //   result.body.should.have.property('data');
    //   result.body.should.have.property('message');
    // });
    it('should show forbidden message when no authkey is provided', async () => {
      const result = await chai.request(server)
        .get(orderRoute);
      result.should.have.status(403);
      result.body.should.have.property('error');
      result.body.should.have.property('message');
    });
  });
});
