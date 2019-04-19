import { BaseController } from '../../lib/controller';

// import service
import { CustomerService } from '../service';

class CustomerController extends BaseController {
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
    }
};

export default new CustomerController();
