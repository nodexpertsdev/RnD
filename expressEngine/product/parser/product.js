// import base Parser
import {
  BaseParser,
} from '../../lib/parser/index';

class ProductParser extends BaseParser {
  run(controller, functionName) {
    return async (req, res) => {
      const {
        body,
        params,
        query,
      } = req;
      try {
        if (!(controller && controller[functionName])) {
          throw new Error(`No function found in controller having name : ${functionName}`);
        }
        
        const result = await controller[functionName]({
          params,
          query,
          body,
        });
        this.response(res, result);
      } catch (error) {
        this.response(res, error, 409);
      }
    };
  }
}

export default new ProductParser();
