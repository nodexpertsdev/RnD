// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { UserService } from '../service';

class Controller extends BaseController {
  create = async (data) => {
    const { body } = data;
    const result = await UserService.registerUser(body);
    return result;
  };

  get = async (data) => {
    const userData = await UserService.get(data);
    return userData;
  };

  delete = async (data) => {
    const result = await UserService.delete(data);
    return result;
  }
}
export default new Controller();
