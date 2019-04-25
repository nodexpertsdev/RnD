// import service libraries
import { DBService } from '../../lib/service';

// import collections
import { Product } from '../../model';

// import messages
import { success, error } from '../../cms/product';

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

  deleteProduct = async (data) => {
    const { id } = data;
    const product = await DBService.updateOne(Product, {
      isDiscontinued: true,
    }, { id });
    const { n, nModified } = product;
    if (product.error) {
      return product;
    }
    if (nModified) {
      return { message: success.productDeleted };
    } if (n) {
      return { error: error.productAlreadyDeleted };
    }
    return { error: error.productNotFound };
  }
}

export default new Service();
