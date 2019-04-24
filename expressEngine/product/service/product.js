// import service libraries
import { DBService } from '../../lib/service';

// import collections
import { Product } from '../../model';

// import messages
import { success } from '../../cms/product';

class Service {
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

  updateProduct = async (data) => {
    const { filter, dataToUpdate } = data;
    const product = await DBService.updateOne(Product, dataToUpdate, filter);
    if (product.error) {
      return product;
    }
    return { data: product, message: success.productUpdated };
  }
}

export default new Service();
