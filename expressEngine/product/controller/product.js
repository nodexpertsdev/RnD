// import service
import { ProductService } from '../service/index';

class ProductController  {
  create = async (data) => {
    try {
      console.log('Inside Register Product Method');

      return await ProductService.registerProduct(data);
    } catch (err) {
      return err;
    }
  };
};

export default new ProductController();