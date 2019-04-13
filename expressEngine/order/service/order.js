// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { order } from '../../model/index';

class Service extends BaseService {
  generateOrder = async (data) => {
    try {
      const { orderNumber, supplierId, unitPrice, productPackage } = data;
      // requiredFields = ['orderNumber', 'supplierId', 'unitPrice', ]
      // this.validateRequired(data, requiredFields)
      const result = await DBService.create(order, {
        orderNumber,
        supplierId,
        unitPrice,
        package:productPackage,
      });      
      return result;

    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new Service();