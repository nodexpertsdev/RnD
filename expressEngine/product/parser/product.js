// import the controller
import { ProductController } from "../controller/index";

// import base Parser
import { BaseParser } from '../../lib/parser/index';

class ProductParser extends BaseParser {

  run(functionName){

    return async (req, res)  => {
      const { body, params, query } = req.body;
      try {
        const result = await ProductController[functionName]({ params, query, body });
        this.response(res, result);
      } catch (error) {
        this.response(res, this.error(error), 409);
      }
    }
  }
}

export default new ProductParser();