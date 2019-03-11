// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { OrderModel } from '../../model/index';

// import messages
import { success } from '../../cms/order';

class Service extends BaseService {
  generateOrder = async (data) => {
    try {
      const { orderNumber, supplierId, unitPrice, productPackage } = data,
      requiredFields = ['orderNumber', 'supplierId', 'unitPrice', ]
      console.log('Service: Order Create');
      this.validateRequired(data, requiredFields)
      const Order = await DBService.create(OrderModel, {
        orderNumber,
        supplierId,
        unitPrice,
        package:productPackage,
      });

      return this.success(Order, success.orderGenerated);

    } catch (err) {
      console.log('ERROR:::::::::::::::::::::::::', err);
      return this.error(err);
    }
  }
}

export default new Service();