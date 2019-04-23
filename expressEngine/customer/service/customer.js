// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { Customer } from '../../model';

// import messages
import { error, success } from '../../cms/customer';
// import helper
import Helper from '../../lib/helper';

class Service extends BaseService {
register = async (data) => {
  try {
    const {
      firstName, lastName, city, country, contactNo,
    } = data;
      // const requiredFields = ["firstName", "lastName", "city", "country", "contactNo"];

    const isExist = await DBService.findOne(Customer, {
      firstName,
      lastName,
    });
    if (isExist) {
      return error.alreadyRegistered;
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
};

  delete = async (data) => {
    const { id } = data.params;
    const valid = Helper.validateId(id);
    if (!valid) {
      return { error: error.customerNotFound };
    }
    const result = await DBService.deleteOne(Customer, { _id: id });
    const { deletedCount } = result;
    return deletedCount
      ? { message: success.customerDeleted }
      : { error: error.customerNotFound };
  };
}

export default new Service();
