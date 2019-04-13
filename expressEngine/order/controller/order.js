// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { OrderService } from '../service/index';
import { success } from '../../cms/order';

class Controller extends BaseController {
  create = async ({body}) => {
    try {
      const orderData = await OrderService.generateOrder(body);
      return { data: orderData, message: success.orderGenerated};
    } catch (err) {
      throw new Error(err);
    }
  };
};

export default new Controller();