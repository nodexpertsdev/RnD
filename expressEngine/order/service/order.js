// import service libraries
import { DBService } from '../../lib/service';

// import collections
import { Order } from '../../model';

// import messages
import { success, error } from '../../cms/order';

class Service {
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

  cancelOrder = async (data) => {
    const { orderNumber } = data;
    const order = await DBService.deleteOne(Order, { orderNumber });
    const { deletedCount } = order;
    
    if (order.error) {
      return order;
    }
    return deletedCount
      ? { message: success.orderCanceled }
      : { error: error.orderNotFound };
  }
}

export default new Service();
