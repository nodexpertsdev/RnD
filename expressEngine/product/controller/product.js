// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { ProductService } from '../service';

import {success} from '../../cms/product';

class ProductController extends BaseController  {
  create = async ({body}) => {
    try {
      const productData = await ProductService.registerProduct(body);
      return {data: productData, message: success.productRegistered};
    } catch (err) {      
      throw new Error(err);
    }
  };
};

export default new ProductController();
