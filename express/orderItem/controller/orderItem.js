import { orderItemService } from '../service';

class Controller {
  create = ({ body }) => orderItemService.generateOrder(body);
}

export default new Controller();
