import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { User } from '../../../model';
import { error, success } from '../../data';

const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);

describe('Delete function in api/user/', () => {

  it('success case', async () => {
    const { userId } = await User.create({
      email: success.email[0],
      password: success.password,
      role: success.role.systemAdmin,
    });

    const result = await chai
      .request(server)
      .delete(`${success.userRoute}/${userId}`)
      .set(success.header);

    result.should.have.status(success.status);
    result.body.should.have.property('data');
    result.body.should.have.property('message');
  });

  it('wrong id passed', async () => {

    const result = await chai
      .request(server)
      .delete(`${success.userRoute}/2333`)
      .set({ authkey: 'successive' });

    result.should.have.status(error.status);
    result.body.should.have.property('error');
  });
});
