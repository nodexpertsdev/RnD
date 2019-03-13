// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async (data) => {
    try {
      console.log('Inside Register User Method');

      return await UserService.registerUser(data);
    } catch (err) {
      return err;
    }
  };
  delete = async (id) => {
    try {
      return await UserService.deleteUser(id);
    } catch (err) {
      return err;
    }
  };
};

export default new Controller();