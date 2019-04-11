// import the controller
import {
  UserController
} from "../controller";

// import base controller
import {
  BaseParser
} from '../../lib/parser';

class Parser extends BaseParser {

  create = async (req, res) => {
    try {
      const {
        email,
        password
      } = req.body;
      const result = await UserController.create({
        email,
        password
      });
      this.response(res, result);
    } catch (error) {
      this.response(res, error, 409);
    }
  }

  createToken = async (req, res) => {
    try {
      const {
        email,
        password
      } = req.body;
      const result = await UserController.createToken({
        email,
        password
      });
      this.response(res, result);
    } catch (error) {
      this.response(res, error, 409);
    }
  }

  delete = async (req, res) => {
    try {
      const {
        id
      } = req.params;
      const result = await UserController.delete(id);
      this.response(res, result);
    } catch (error) {
      this.response(res, error, 400);
    }
  }
}

export default new Parser();