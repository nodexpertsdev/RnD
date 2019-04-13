// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async (data) => {
    console.log("inside userController");
    console.log(data);
    const userData = await UserService.registerUser(data.body);

    return { userId: userData.userId };
  };
};

export default new Controller();