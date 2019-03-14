// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { OrderItemsService } from '../service/index';

class OrderItemsController extends BaseController {
  create = async (data) => {
    try {
      console.log('Inside Register OrderItems Method');

      return await OrderItemsService.registerorderItems(data);
    } catch (err) {
      return err;
    }
  };
};

export default new OrderItemsController();