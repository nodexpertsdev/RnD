// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { ProductService } from '../service/index';

class ProductController extends BaseController  {
  create = async ({body}) => {
    const {name, supplierId, unitPrice, package, isDiscontinued} = body;
    try {
      console.log('Inside Register Product Method');

      return await ProductService.registerProduct( {name, supplierId, unitPrice, package, isDiscontinued});
    } catch (err) {
      return err;
    }
  };
};

export default new ProductController();