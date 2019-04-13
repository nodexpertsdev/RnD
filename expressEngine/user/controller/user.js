// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async (data) => {
    const userData = await UserService.registerUser(data);

    return { userId: userData.userId };
  };

  delete = async (id) => {
    const userData = await UserService.deleteUser(id);
    return userData;
  }
};

export default new Controller();
