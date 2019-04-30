// import service libraries
import { DBService } from '../../lib/service';

// import collections
import { Product } from '../../model';

// import messages
import { success } from '../../cms/product';
import { error } from '../../cms/common';

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

  getProduct = async ({ query }) => {
    const dataToFind = {
      collection: Product,
      data: {
        isDiscontinued: { $ne: true },
      },
      limit: query.limit,
      skip: query.skip,
    };
    const products = (await DBService.find(dataToFind));
    if (products.error) {
      return products;
    }
    if (!products.length) {
      return { error: error.noRecords };
    }
    return { data: products };
  };
}

export default new Service();
