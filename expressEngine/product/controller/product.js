// import service
import { ProductService } from '../service';

class ProductController {
  create = ({ body }) => ProductService.registerProduct(body);

  update = ({ body }) => ProductService.updateProduct(body);

  get = data => ProductService.getProduct(data);
}

export default new ProductController();
