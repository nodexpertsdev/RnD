// import base controller
import { BaseController } from '../../lib/controller/index';

// import service
import { OrderService } from '../service/index';

class Controller extends BaseController {
  create = async (req, res) => {
    try {
      await OrderService.generateOrder(req, res);
    } catch (err) {
      return this.response(res, this.error(err), 422);
    }
  };
};

export default new Controller();