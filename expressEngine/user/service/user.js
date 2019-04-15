// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { user } from '../../model';
// import messages
import { error } from '../../cms/user';

class Service extends BaseService {
  constructor() {
    super();
    this.supplier = 'supplier';
  }

  registerUser = async ({ email, password, ...rest }) => {
    const isExist = await DBService.count(user, { email });
    if (isExist) {
      throw new Error(error.alreadyRegistered);
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

    const User = await DBService.create(user, {
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

    if (!User) {
      throw new Error(error.unableToRegister);
    }
    return User;
  }
}

export default new Service();