// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { User } from '../../model/index';

// import messages
import { error } from '../../cms/user/index';

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
  readUser = async ({ query, body }) => {
    const getUsers = await DBService.findAll({
      collection: User,
      data: body,
      limit: query.limit,
      skip: query.skip,
    }) || [];

    if(!getUsers.length) {
      throw error.noRecords;
    }
    return getUsers;
  }
}

export default new Service();
