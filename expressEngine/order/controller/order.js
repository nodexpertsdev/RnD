// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { OrderService } from '../service';

class Controller extends BaseController {
  create = ({ body }) => OrderService.generateOrder(body);
}

export default new Controller();
