// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async (data) => {
    const userData = await UserService.registerUser(data);

    return { userId: userData.userId };
  };
  read = async ({query}) => {
    const userData = await UserService.readUser(query);

    return { data: userData };
  }
};

export default new Controller();
