// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { Order } from '../../model';

// import messages
import { success } from '../../cms/order';

class Service extends BaseService {
  generateOrder = async (data) => {
    const {
      orderNumber, supplierId, unitPrice, productPackage,
    } = data;
    const order = await DBService.create(Order, {
      orderNumber,
      supplierId,
      unitPrice,
      package: productPackage,
    });
    if (order.error) {
      return order;
    }
    return { data: order, message: success.orderGenerated };
  }
}

export default new Service();
