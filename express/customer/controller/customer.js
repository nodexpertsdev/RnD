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

  put = ({ body }) => CustomerService.put(body);
}

export default new CustomerController();
