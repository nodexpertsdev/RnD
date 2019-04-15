// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async (data) => {
    const userData = await UserService.registerUser(data);

    return { userId: userData.userId };
  };

  delete = async (data) => {
    const { id } = data.params;
    await UserService.deleteUser(id);
  }
};

export default new Controller();
