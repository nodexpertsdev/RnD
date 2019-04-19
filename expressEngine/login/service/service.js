// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { User } from '../../model';
import { userToken } from '../../model';

// import validateRequired
import { validateRequired } from '../../lib/validationHandler';
import { error, success } from '../../cms/user';

// import utils
import userHelper from '../utils';


class LoginService extends BaseService {
    login = async ({ body }) => {
      const { email, password: loginPassword } = body;
      const projection = userHelper.getProjection();
      const isExist = await DBService.findOne(User, { email }, projection);
      if (!isExist) {
        return { error: 'user not found' };
      }
      const { password: hashPassword = '', id: userId = '' } = isExist;
      const match = await userHelper.checkUser({ loginPassword, hashPassword });
      if (!match || match.error) {
        return { error: 'incorrect password' };
      }
      const token = await userHelper.createToken({ data: body });
      if (!token || token.error) {
        return { error: 'token is not generated' };
      }
      const storeToken = await DBService.create(userToken, {
        email,
        userId,
        token,
      });
      if (!storeToken) {
        return { error: 'unable to store token in DB' };
      }
      return { data: storeToken.token, message: 'token is generated' };
    }
}

export default new LoginService();
