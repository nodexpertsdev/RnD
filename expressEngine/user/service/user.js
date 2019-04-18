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

  registerUser = async (data) => {
    try {
      const {
        city,
        companyName,
        contactName,
        contactTitle,
        country,
        email,
        fax,
        password,
        phone,
        role = this.supplier,
      } = data;
      const requiredFields = ['email', 'password'];

      validateRequired(data, requiredFields);

      const isExist = await DBService.count(User, { email });
      if (isExist) {
        throw error.alreadyRegistered;
      }
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
      return this.success(success.userRegistered);
    } catch (err) {
      return this.error(err);
    }
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
    if (!(users.error || users.length)) {
      return err;
    }
    return users;
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
