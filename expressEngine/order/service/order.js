// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { Order } from '../../model';

class Service extends BaseService {
  generateOrder = async (data) => {
    try {
      const { orderNumber, supplierId, unitPrice, productPackage } = data;
      const result = await DBService.create(Order, {
        orderNumber,
        supplierId,
        unitPrice,
        package:productPackage,
      });
      return result;

    } catch (err) {
      return this.error(err);
    }
  }
}

export default new Service();