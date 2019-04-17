// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { Customer } from '../../model';

// import messages
import { error, success } from '../../cms/customer';

class Service extends BaseService {
    register = async (data) => {
        try {
            const { firstName, lastName, city, country, contactNo } = data;
            //const requiredFields = ["firstName", "lastName", "city", "country", "contactNo"];

            const isExist = await DBService.findOne(Customer, { firstName, lastName });
            if (isExist) {
                throw error.alreadyRegistered;
            }

            const customer = await DBService.create(Customer, {
                firstName,
                lastName,
                city,
                country,
                contactNo,
            });

            return this.success(customer, success.customerRegistered);
        } catch (err) {
            return this.error(err);
        }
    }
}

export default new Service();
