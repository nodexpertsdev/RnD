// import the controller
import { UserController } from "../controller/index";

// import base controller
import { BaseParser } from '../../lib/parser/index';

class Parser extends BaseParser {

  create = async (req, res)  => {
    try {
      const result = await UserController.create(...req.body);
      this.response(res, result);
    } catch (error) {
      this.response(res, error, 409);
    }
   }
}

export default new Parser();