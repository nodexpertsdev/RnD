// import service
import { OrderService } from '../service';

class Controller {
  create = ({ body }) => OrderService.generateOrder(body);
}

export default new Controller();
