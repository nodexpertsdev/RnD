// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { ProductService } from '../service/index';

class ProductController extends BaseController  {
  create = async ({body}) => {
    try {
      return await ProductService.registerProduct(body);
    } catch (err) {
      throw new Error(err);
    }
  };
};

export default new ProductController();