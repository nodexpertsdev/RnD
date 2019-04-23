// import service
import { CustomerService } from '../service';

class CustomerController {
    create = async ({ body }) => {
      try {
        return await CustomerService.register(body);
      } catch (err) {
        return err;
      }
    };
}

export default new CustomerController();
