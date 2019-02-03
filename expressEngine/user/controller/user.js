// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { UserService } from '../service/index';

class Controller extends BaseController {
  create = async (req, res) => {
    try {
      console.log('Inside Register User Method');

      await UserService.registerUser(req, res);
    } catch (err) {
      return this.response(res, this.error(err), 422);
    }
  };
};

export default new Controller();