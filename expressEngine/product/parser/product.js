// import the controller
import { ProductController } from "../controller/index";

// import base Parser
import { BaseParser } from '../../lib/parser/index';

class ProductParser extends BaseParser {

  create = async (req, res)  => {
    try {
      const { name, supplierId, unitPrice, package, isDiscounted } = req.body;
      const result = await ProductController.create({ name, supplierId, unitPrice, package, isDiscounted });
      this.response(res, result);
    } catch (error) {
      this.response(res, this.error(error), 409);
    }
  }
}

export default new ProductParser();