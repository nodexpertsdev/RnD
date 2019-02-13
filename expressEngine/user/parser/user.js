// import the controller
import { UserController } from "../controller/index";

// import base controller
import { BaseParser } from '../../lib/parser/index';

class Parser extends BaseParser {

  create = async (req, res)  => {
    try {
      const { email, password } = req.body;
      const result = await UserController.create({ email, password });
      this.response(res, result);
    } catch (error) {
      this.response(res, error, 409);
    }
   }
}

export default new Parser();
