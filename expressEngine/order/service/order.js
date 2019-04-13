// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { Order } from '../../model/index';

// import messages
import { success } from '../../cms/order';

//import validateRequired
import { validateRequired } from '../../lib/validationHandler';

class Service extends BaseService {
  generateOrder = async (data) => {
    try {
      console.log("inside orderService");
      console.log(data);
      const { orderNumber, supplierId, unitPrice, productPackage } = data,
      requiredFields = ['orderNumber', 'supplierId', 'unitPrice' ];
      // const status = validateRequired.validate(data, requiredFields)
      const status = validateRequired.validateReqData(data, requiredFields);
      
      let result;
      if (!Object.keys(status).length) {
        result = await DBService.create(Order, {
          orderNumber,
          supplierId,
          unitPrice,
          package:productPackage,
        });
      }
      return this.success(result, success.orderGenerated);
    } catch (err) {
      return this.error(err);
    }
  }
}

export default new Service();