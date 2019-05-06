// import service libraries
import { DBService } from '../../lib/service';

// import collections
import { Order } from '../../model';

// import messages
import { success } from '../../cms/order';
import { error } from '../../cms/common';

class Service {
  generateOrder = async (data) => {
    const {
      orderNumber, supplierId, unitPrice, productPackage, status,
    } = data;
    const order = await DBService.create(Order, {
      orderNumber,
      supplierId,
      unitPrice,
      status,
    });
    if (order.error) {
      return order;
    }
    return { data: order, message: success.orderGenerated };
  }

  updateOrder = async (data) => {
    const { orderNumber, dataToUpdate } = data;
    if (!dataToUpdate || Object.entries(dataToUpdate).length === 0) {
      return { error: error.emptyData };
    }
    const order = await DBService.updateOne(Order, { orderNumber }, dataToUpdate);
    if (order.error) {
      return order;
    }
    const { nModified, n } = order;
    if (nModified) {
      return { message: success.orderUpdated };
    }
    if (n) {
      return { error: error.alreadyUpdated };
    }
    return { error: error.unableToUpdate };
  }
}
export default new Service();
