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

  deleteProduct = async (data) => {
    const { id } = data;
    const product = await DBService.updateOne(Product, {
      isDiscontinued: true,
    }, { productId: id });
    const { n, nModified } = product;
    if (nModified) {
      return { message: success.productDeleted };
    } if (n) {
      return { message: success.productAlreadyDeleated };
    }
    return { message: success.productNotFound };
  }
}

export default new Service();
