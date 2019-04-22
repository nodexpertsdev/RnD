// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { Product } from '../../model';

// import messages
import { success } from '../../cms/product';

class Service extends BaseService {
  registerProduct = async (data) => {
    const {
      name, supplierId, unitPrice, productPackage, isDiscontinued,
    } = data;

    const product = await DBService.create(Product, {
      name,
      supplierId,
      unitPrice,
      package: productPackage,
      isDiscontinued,
    });
    if (product.error) {
      return product;
    }
    return { data: product, message: success.productRegistered };
  }
}

export default new Service();
