// import service libraries
import { BaseService, DbService } from '../../lib/service/index';

// import collections
import { ProductModel, ProductDetail } from '../../model/index';

// import messages
import cms from '../../cms/product/index';

class Service extends BaseService {
  registerProduct = async (data) => {
    try {
      // const data = { ...req.body };

      const requiredFields = ["name", "supplierId","unitPrice"];
      this.validateRequired(data, requiredFields);

      const isExist = await DbService.count(ProductModel, { name: data.name, supplierId: data.supplierId });
      if (isExist) {
        return this.error(cms.alreadyRegistered);
      }


      const Product = await DbService.create(ProductModel, {
        name: data.name,
        supplierId: data.supplierId,
        unitPrice: data.unitPrice,
        package: data.productPackage,
        isDiscontinued: data.isDiscontinued
      });

      return this.success(Product, cms.ProductRegistered);
    } catch(err) {
      console.log('ERROR:::::::::::::::::::::::', err);
      return this.error(err);
    }
  }
}

export default new Service();