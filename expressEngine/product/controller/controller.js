// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { ProductService } from '../service';

class ProductController extends BaseController  {
  create = async ({body}) => {
    try {
      return await ProductService.registerProduct(body);
    } catch (err) {
      return err;
    }
  };
};

export default new ProductController();