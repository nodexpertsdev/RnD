// import base Parser
import { BaseParser } from '../../lib/parser/index';

class ProductParser extends BaseParser {

  run(controller, functionName){

    return async (req, res)  => {
      const { body, params, query } = req;
      try {
        const result = await controller[functionName]({ params, query, body });
        this.response(res, result);
      } catch (error) {
        this.response(res, this.error(error), 409);
      }
    }
  }
}

export default new ProductParser();