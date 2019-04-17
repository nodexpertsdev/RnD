// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { UserService } from '../service';

import { success } from '../../cms/user';
class Controller extends BaseController {
  create = async (data) => {
    const { body } = data;
    const userData = await UserService.registerUser(body);
    return { data: userData, message: success.userRegistered };
  };
};

export default new Controller();
