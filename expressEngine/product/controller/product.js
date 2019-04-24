// import service
import { ProductService } from '../service';

class ProductController {
  create = ({ body }) => ProductService.registerProduct(body);

  update = ({ body }) => ProductService.updateProduct(body);
}

export default new ProductController();
