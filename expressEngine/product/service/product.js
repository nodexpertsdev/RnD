// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { ProductModel, ProductDetail } from '../../model/index';

// import messages
import {successMessage} from '../../cms/successMessage';

class Service extends BaseService {
  registerProduct = async (data) => {
    try {
      const {name, supplierId,unitPrice, productPackage, isDiscontinued  } = data,
      requiredFields = ['name', 'supplierId','unitPrice'];
      
      this.validateRequired(data, requiredFields);
      const Product = await DBService.create(ProductModel, {
        name,
        supplierId,
        unitPrice,
        package: productPackage,
        isDiscontinued
      });

      return this.success(Product, successMessage.productRegistered);
    } catch(err) {
      return this.error(err);
    }
  }
}

export default new Service();