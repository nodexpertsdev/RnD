// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { Product, ProductDetail } from '../../model';

class Service extends BaseService {
  registerProduct = async (data) => {
    try {
      const {name, supplierId,unitPrice, productPackage, isDiscontinued  } = data;

      const product = await DBService.create(Product, {
        name,
        supplierId,
        unitPrice,
        package: productPackage,
        isDiscontinued
      });

      return product;
    } catch(err) {
      return this.error(err);
    }
  }
}

export default new Service();