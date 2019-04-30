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

  updateProduct = async (data) => {
    const { criteria, dataToUpdate } = data;
    if (!criteria || Object.entries(criteria).length === 0) {
      return { error: error.emptyCriteria };
    }
    if (!dataToUpdate || Object.entries(dataToUpdate).length === 0) {
      return { error: error.emptyData };
    }
    const collection = Product;
    const product = await DBService.updateOne({ collection, dataToUpdate, criteria });
    if (product.error) {
      return product;
    }
    const { nModified: FilesModifiled, n: FilesFound } = product;
    if (FilesFound === 0) {
      return { error: error.noRecord };
    }
    if (FilesModifiled === 0) {
      return { error: error.noModification };
    }
    return { data: { FilesFound, FilesModifiled }, message: success.productUpdated };
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
