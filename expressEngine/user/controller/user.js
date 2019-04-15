// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { UserService } from '../service/index';
import success from '../../cms/user/success';
class Controller extends BaseController {
  create = async ({body}) => {
    try{
      const userData = await UserService.registerUser(body);
      return {data: userData, message: success.userRegistered};
    } catch (err) {
      throw new Error(err);
    }
  };
};

export default new Controller();