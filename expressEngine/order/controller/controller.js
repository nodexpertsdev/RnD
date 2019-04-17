// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { OrderService } from '../service';

class Controller extends BaseController {
  create = async ({body}) => {
    try {
      return await OrderService.generateOrder(body);
    } catch (err) {
      return err;
    }
  };
};

export default new Controller();