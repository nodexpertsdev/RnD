import { OrderItemService } from '../service';

class Controller {
  create = ({ body }) => OrderItemService.generateOrder(body);
}

export default new Controller();
