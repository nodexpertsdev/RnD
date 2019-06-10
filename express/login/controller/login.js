// import base controller
import { BaseController } from '../../lib/controller';

// import service
import userService from '../service';

class Controller extends BaseController {
  login = async (data) => {
    const loginData = await userService.login(data);
    return loginData;
  };
}
export default new Controller();
