// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { ProductService } from '../service/index';

class ProductController extends BaseController  {
  create = async ({body}) => {
    console.log("#####################", body);
    const {name, supplierId, unitPrice, productPackage , isDiscontinued} = body;
    try {
      console.log('Inside Register Product Method');

      return await ProductService.registerProduct( {name, supplierId, unitPrice, productPackage , isDiscontinued});
    } catch (err) {
      return err;
    }
  };
};

export default new ProductController();