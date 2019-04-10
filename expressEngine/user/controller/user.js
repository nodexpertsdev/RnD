// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async (data) => {
    const userData = await UserService.registerUser(data);

    // return { userId: userData.userId };
    return this.response({ userId: userData.userId })
  };
};

export default new Controller();