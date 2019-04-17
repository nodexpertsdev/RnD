// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { UserService } from '../service';

class Controller extends BaseController {
  create = async (data) => {
    const { body } = data;
    const userData = await UserService.registerUser(body);
    return { userId: userData.userId };
  };

  get = async (data) => {
    const userData = await UserService.get(data);

    return { data: userData };
  };

  delete = async (data) => {
    const result = await UserService.delete(data);
    return result;
  }
}
export default new Controller();
