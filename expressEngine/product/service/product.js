// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { ProductModel, ProductDetail } from '../../model/index';

// import messages
import cms from '../../cms/product/index';

class Service extends BaseService {
  registerProduct = async (data) => {
    try {
      const {name, supplierId,unitPrice, productPackage, isDiscontinued  } = data,
      requiredFields = ['name', 'supplierId','unitPrice'];
      
      console.log('Service: Product create');
      this.validateRequired(data, requiredFields);
      const Product = await DBService.create(ProductModel, {
        name,
        supplierId,
        unitPrice,
        package: productPackage,
        isDiscontinued
      });

      return this.success(Product, cms.success.productRegistered);
    } catch(err) {
      console.log('ERROR:::::::::::::::::::::::', err);
      return this.error(err);
    }
  }
}

export default new Service();