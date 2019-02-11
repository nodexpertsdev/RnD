// import the controller
import { UserController } from "../controller/index";

// import base controller
import { BaseController } from '../../lib/controller/index';

class UserParser extends BaseController {

  create = async (req, res)  => {
    try {
      const { email, password } = req.body;
      const result = await UserController.create({ email, password });
      this.response(res, result);
    } catch (error) {
      this.response(res, this.error(error), 409);
    }
   }
}

export default new UserParser();