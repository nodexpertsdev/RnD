// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { User } from '../../model';

// import validateRequired
import { validateRequired } from '../../lib/validationHandler';
import { error, success } from '../../cms/user';

// import utils
import userHelper from '../utils';

class Service extends BaseService {
  constructor() {
    super();
    this.supplier = 'supplier';
  }

  registerUser = async ({ email, password, ...rest }) => {
    const isExist = await DBService.count(User, { email });
    if (isExist) {
      return { error: error.alreadyRegistered};
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

    if (!user) {
      return { error: error.unableToRegister };
    }
  };
    return { data: user ,message: success.userRegistered };
  }

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
    if (!(users.error || users.length)) {
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
    await DBService.deleteOne(User, { userId: id });
    return ({ message: success.userDeleted });
  }
}

export default new Service();
