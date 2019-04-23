// import service
import { OrderService } from '../service';

class Controller {
  create = ({ body }) => OrderService.generateOrder(body);

  delete = ({ params }) => OrderService.cancelOrder(params);
}

export default new Controller();
