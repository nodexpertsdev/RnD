// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class UserController extends BaseController {
  create = async (data) => {
    try {
      console.log('Inside Register User Method');

      return await UserService.registerUser(data);
    } catch (err) {
      return err;
    }
  };
};

export default new UserController();