// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { User } from '../../model';

// import messages
import { error, success } from '../../cms/user';

class Service extends BaseService {
  constructor() {
    super();
    this.supplier = 'supplier';
  }

    registerUser = async ({ email, password, ...rest }) => {
    const isExist = await DBService.count(User, { email });
    if (isExist) {
      throw error.alreadyRegistered;
    }

    const {
      role = this.supplier,
      companyName = '',
      contactName = '',
      contactTitle = '',
      city = '',
      country = '',
      phone = '',
      fax = '',
    } = rest;

    const user = await DBService.create(User, {
      email,
      password,
      role,
      companyName,
      contactName,
      contactTitle,
      city,
      country,
      phone,
      fax,
    });

    if (!user) {
      throw error.unableToRegister;
    }

    return user;
  }

  delete = async (data) => {
    const { id } = data.params;
    const isExist = await DBService.findOne(User, { userId: id });
    if (!isExist) {
      throw { error: error.unableToDelete };
    }
    await DBService.deleteMany(User, { userId: id });
    return ({ message: success.userDeleted });
  }
}

export default new Service();
