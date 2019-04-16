import { BaseController } from '../../lib/controller';

// import service
import { CustomerService } from '../service/index';

class CustomerController extends BaseController {
    create = async ({ body }) => {
        try {
            return await CustomerService.registerCustomer(body);
        } catch (err) {
            return err;
        }
    };
};

export default new CustomerController();