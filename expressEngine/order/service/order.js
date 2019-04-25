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

  get = async ({ query }) => {
    const { skip, limit } = query;
    const dataToFind = {
      collection: Order,
      skip,
      limit,
    };
    const orders = (await DBService.find(dataToFind));
    if (orders.error) {
      return orders;
    }
    if (!orders.length) {
      return { error: error.noRecords };
    }
    return { data: orders };
  }
}
export default new Service();
