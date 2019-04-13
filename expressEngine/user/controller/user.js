// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async ({body}) => {
    try{
      const userData = await UserService.registerUser(body);
      return userData;
    } catch (err) {
      throw new Error(err);
    }
  };
};

export default new Controller();