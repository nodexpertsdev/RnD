// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { Product, ProductDetail } from '../../model/index';

// import messages
import {success} from '../../cms/product/index';

class Service extends BaseService {
  registerProduct = async (data) => {
    try {
      const {name, supplierId,unitPrice, productPackage, isDiscontinued  } = data,
      requiredFields = ['name', 'supplierId','unitPrice'];
      
      // this.validateRequired(data, requiredFields);
      const product = await DBService.create(Product, {
        name,
        supplierId,
        unitPrice,
        package: productPackage,
        isDiscontinued
      });

      return this.success(product, success.productRegistered);
    } catch(err) {
      return this.error(err);
    }
  }
}

export default new Service();