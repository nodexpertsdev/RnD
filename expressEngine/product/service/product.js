// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { Product, ProductDetail } from '../../model';

// import messages
<<<<<<< HEAD
import {successMessage} from '../../cms/successMessage';
=======
import {success} from '../../cms/product';
>>>>>>> develop

class Service extends BaseService {
  registerProduct = async (data) => {
    try {
      const {name, supplierId,unitPrice, productPackage, isDiscontinued  } = data,
      requiredFields = ['name', 'supplierId','unitPrice'];

      this.validateRequired(data, requiredFields);
      const product = await DBService.create(Product, {
        name,
        supplierId,
        unitPrice,
        package: productPackage,
        isDiscontinued
      });

<<<<<<< HEAD
      return this.success(Product, successMessage.productRegistered);
=======
      return this.success(product, success.productRegistered);
>>>>>>> develop
    } catch(err) {
      return this.error(err);
    }
  }
}

export default new Service();