// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { User } from '../../model';

// import messages
import { error } from '../../cms/user';

class Service extends BaseService {
  constructor() {
    super();
    this.supplier = 'supplier';
  }

  registerUser = async ({ email, password, ...rest }) => {
    try {
      const isExist = await DBService.count(User, { email });
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
        throw new Error(error.unableToRegister);
      }
      return user;
    } catch(err) {
      throw err;
    }
  }
}

export default new Service();