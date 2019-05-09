/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { User } from '../../../model';
import { error, success, config } from '../../data';

const should = chai.should();
chai.use(chaiHttp);
describe('userDelete', () => {
  const { header, status, route } = config;
  const { user } = route;
  const { ok, internalServerError } = status;

  describe(`delete function in ${user}`, () => {
    const { email, password, role } = success;
    const { systemAdmin } = role;

    it('should delete user', async () => {
      const { userId } = await User.create({
        email,
        password,
        role: systemAdmin,
      });

      const result = await chai
        .request(server)
        .delete(`${user}/${userId}`)
        .set(header);

      result.should.have.status(ok);
      result.body.should.have.property('data');
      result.body.should.have.property('message');
    });

    it('should fail for the wrong id', async () => {
      const { userId } = error;

      const result = await chai
        .request(server)
        .delete(`${user}/${userId}`)
        .set(header);

      result.should.have.status(internalServerError);
      result.body.should.have.property('error');
    });
  });
});
