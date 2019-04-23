// import service libraries
import { DBService } from '../../lib/service';

// import collections
import { User } from '../../model';

import { error, success } from '../../cms/user';

// import utils
import userHelper from '../utils';

class Service {
  constructor() {
    this.supplier = 'supplier';
  }

  registerUser = async ({ email, password, ...rest }) => {
    const isExist = await DBService.count(User, { email });
    if (isExist.error) {
      return isExist;
    }
    if (isExist) {
      return { error: error.alreadyRegistered };
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
        
    if (user.error) {
      return user;
    }
    return { data: user, message: success.userRegistered };
  };

  get = async ({ query, body }) => {
    const projection = userHelper.getProjection();
    const dataToFind = {
      projection,
      collection: User,
      data: body,
      limit: query.limit,
      skip: query.skip,
    };
    const users = (await DBService.find(dataToFind));
    const err = { error: error.noRecords };
    if (users.error) {
      return users;
    }
    if (!users.length) {
      return err;
    }
    return { data: users };
  };

  delete = async (data) => {
    const { id } = data.params;
    const isExist = await DBService.findOne(User, { userId: id });
    if (!isExist) {
      return { error: error.unableToDelete };
    }
    if (isExist.error) {
      return isExist;
    }
    const deleted = await DBService.deleteOne(User, { userId: id });
    if (deleted.error) {
      return deleted;
    }
    return ({ data: deleted, message: success.userDeleted });
  }
}

export default new Service();
