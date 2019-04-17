// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { Order } from '../../model';

// import messages
import { success } from '../../cms/order';

class Service extends BaseService {
  generateOrder = async (data) => {
    try {
      const { orderNumber, supplierId, unitPrice, productPackage } = data,
      requiredFields = ['orderNumber', 'supplierId', 'unitPrice', ]
      // this.validateRequired(data, requiredFields)
      const result = await DBService.create(Order, {
        orderNumber,
        supplierId,
        unitPrice,
        package:productPackage,
      });

      return this.success(result, success.orderGenerated);

    } catch (err) {
      return this.error(err);
    }
  }
}

export default new Service();