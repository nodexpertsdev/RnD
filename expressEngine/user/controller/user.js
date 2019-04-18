// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { UserService } from '../service';

class Controller extends BaseController {
  create = async ({ body }) => {
    try {
      return await UserService.registerUser(body);
    } catch (err) {
      return err;
    }
  };

  get = async (data) => {
    const userData = await UserService.get(data);
    if (userData.error) {
      return userData;
    }
    return { data: userData };
  };

  delete = async (data) => {
    const result = await UserService.delete(data);
    return result;
  }
}
export default new Controller();
