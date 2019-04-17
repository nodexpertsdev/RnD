// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { User } from '../../model/index';

// import messages
import { error } from '../../cms/user/index';

// import utils
import { userHelper } from '../utils';

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
  get = async ({ query, body }) => {
    const projection = userHelper();
    const users = await DBService.findAll({
      projection,
      collection: User,
      data: body,
      limit: query.limit,
      skip: query.skip,
    }) || [];

    if(!users.length) {
      throw error.noRecords;
    }
    return users;
  }
}

export default new Service();
