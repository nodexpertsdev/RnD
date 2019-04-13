// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { OrderService } from '../service/index';

class Controller extends BaseController {
  create = async ({body}) => {
    console.log("inside orderController");
    console.log(body);
    try {
      return await OrderService.generateOrder(body);
    } catch (err) {
      return err;
    }
  };
};

export default new Controller();