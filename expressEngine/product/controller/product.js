// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { ProductService } from '../service';

class ProductController extends BaseController {
  create = ({ body }) => ProductService.registerProduct(body);
}

export default new ProductController();
