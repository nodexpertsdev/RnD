// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { ProductModel } from '../../model/index';

// import messages
import {success} from '../../cms/product/index';

//import validateRequired
import { validateRequired } from '../../lib/validationHandler';

class Service extends BaseService {
  registerProduct = async (data) => {
    try {
      const {name, supplierId,unitPrice, productPackage, isDiscontinued  } = data,
      requiredFields = ['name', 'supplierId','unitPrice'];

      const status = validateRequired(data, requiredFields);
      let Product;
      if (!Object.keys(status).length) {
        Product = await DBService.create(ProductModel, {
          name,
          supplierId,
          unitPrice,
          package: productPackage,
          isDiscontinued
        });
      }
      
      return this.success(Product, success.productRegistered);
    } catch(err) {
      return this.error(err);
    }
  }
}

export default new Service();