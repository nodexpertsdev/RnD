// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { OrderService } from '../service';

import { success } from '../../cms/order';

class Controller extends BaseController {
  create = async ({body}) => {
    try {
      const orderData = await OrderService.generateOrder(body);
      return { data: orderData, message: success.orderGenerated };
    } catch (err) {
      return err;
    }
  };
};

export default new Controller();