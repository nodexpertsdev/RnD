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

  delete = async (data) => {
    const result = await CustomerService.delete(data);
    return result;
  };

  put = async ({ body }) => {
    try {
      return await CustomerService.put(body);
    } catch (err) {
      return err;
    }
  }
}

export default new CustomerController();
