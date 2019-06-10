// import service libraries
import { DBService } from '../../lib/service';

// import collections
import { orderItem } from '../../model';

// import messages
import { success, error } from '../../cms/orderItem';

class Service {
  generateOrder = async (data) => {
    const {
      orderId, productId, unitPrice, quantity,
    } = data;

    const isExist = await DBService.findOne(orderItem, { orderId, productId });
    if (isExist) {
      return { error: error.alreadyRegistered };
    }

    const result = await DBService.create(orderItem, {
      orderId,
      productId,
      quantity,
      unitPrice,
    });

    if (result.error) {
      return orderItem;
    }
    return { data: result, message: success.orderItemGenerated };
  };
}

export default new Service();
