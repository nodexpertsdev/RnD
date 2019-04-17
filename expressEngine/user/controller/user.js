// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async ({body}) => {
    try {
      return await UserService.registerUser(body);
    } catch (err) {
      return err;
    }
  };
};

export default new Controller();