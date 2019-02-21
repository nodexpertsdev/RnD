// import service libraries
import { BaseService, DbService } from '../../lib/service/index';

// import collections
import { Order } from '../../model/index';

// import messages
import cms from '../../cms/order/index';

class Service extends BaseService {

  generateOrder = async (req, res) => {
    const data = { ...req.body };
    const OrderModel = await DbService.create(Order, {
      orderNumber: data.orderNumber,
      supplierId: data.supplierId,
      unitPrice: data.unitPrice,
      package: data.productPackage,
    });

    return this.response(res, this.success(OrderModel, cms.orderGenerated));

  }
}

export default new Service();