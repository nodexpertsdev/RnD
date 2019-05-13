// import service
import { OrderService } from '../service';

class Controller {
  create = ({ body }) => OrderService.generateOrder(body);

  update = ({ body }) => OrderService.updateOrder(body);

  get = data => OrderService.get(data);
}

export default new Controller();
