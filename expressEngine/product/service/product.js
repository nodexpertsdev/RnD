// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { product } from '../../model/index';

// import messages
import {success} from '../../cms/product/index';

class Service extends BaseService {
  registerProduct = async (data) => {
    try {
      const {name, supplierId,unitPrice, productPackage, isDiscontinued  } = data;
      // requiredFields = ['name', 'supplierId','unitPrice'];
      // this.validateRequired(data, requiredFields);
      const Product = await DBService.create(product, {
        name,
        supplierId,
        unitPrice,
        package: productPackage,
        isDiscontinued
      });      
      return this.success(Product, success.productRegistered);
    } catch(err) {
      throw new Error(err);
    }
  }
}

export default new Service();