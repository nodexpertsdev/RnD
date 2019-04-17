// import the controller
import { UserController } from '../controller';

// import base controller
import { BaseParser } from '../../lib/parser';

class Parser extends BaseParser {
  create = async (req, res) => {
    try {
      const data = { ...req.body };
      const requiredFields = ["email", "password"];
      this.validateRequired(data, requiredFields);

      const result = await UserController.create(data);

      this.response(res, this.success(result));
    } catch (error) {
      this.response(res, this.error(error), 422);
    }
  }
}

export default new Parser();
