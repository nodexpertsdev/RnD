// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { UserService } from '../service';

class Controller extends BaseController {
  create = async (data) => {
    const userData = await UserService.registerUser(data);

    return { userId: userData.userId };
  };

  delete = async (data) => {
    const result = await UserService.delete(data);
    return result;
  }
};

export default new Controller();
