// import service libraries
import { DBService } from '../../lib/service';

// import collections
import { Customer } from '../../model';

// import messages
import { error, success } from '../../cms/customer';
// import helper
import { baseHelper } from '../../lib/helper';
import modelLib from '../../model/lib';

class Service {
    register = async (data) => {
      const {
        name, email, city, country, contactNo,
      } = data;
        // const requiredFields = ["firstName", "lastName", "city", "country", "contactNo"];

      const isExist = await DBService.findOne(Customer, { email });
      if (isExist) {
        return { error: error.alreadyRegistered };
      }

      const customer = await DBService.create(Customer, {
        name,
        email,
        city,
        country,
        contactNo,
      });
      if (customer.error) {
        return customer;
      }
      return { data: customer, message: success.customerRegistered };
    }

    delete = async (data) => {
      const { id } = data.params;
      const valid = baseHelper.validateId(id);
      if (!valid) {
        return { error: error.customerNotFound };
      }
      const result = await DBService.deleteOne(Customer, { _id: id });
      const { deletedCount } = result;
      return deletedCount
        ? { message: success.customerDeleted }
        : { error: error.customerNotFound };
    };

    put = async (body) => {
      const { id, dataToUpdate } = body;
      if (!dataToUpdate || Object.entries(dataToUpdate).length === 0) {
        return { error: error.emptyData };
      }
      if (dataToUpdate.email && !modelLib.validateEmail(dataToUpdate.email)) {
        return { error: error.notUpdated };
      }
      const result = await DBService.updateOne(Customer, { _id: id }, dataToUpdate);
      return result.nModified ? { message: success.customerUpdated } : { error: error.notUpdated };
    }
}

export default new Service();
