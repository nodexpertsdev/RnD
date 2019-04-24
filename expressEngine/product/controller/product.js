// import service
import { ProductService } from '../service';

class ProductController {
  create = ({ body }) => ProductService.registerProduct(body);

  delete = ({ params }) => ProductService.deleteProduct(params);
}

export default new ProductController();
