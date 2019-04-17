// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { User } from '../../model/index';

// import messages
import { error } from '../../cms/user/index';

//import validateRequired
import { validateRequired } from '../../lib/validationHandler';

class Service extends BaseService {
  constructor() {
    super();
    this.supplier = 'supplier';
  }

  registerUser = async (data) => {
    const {
      city = '',
      companyName = '',
      contactName = '',
      contactTitle = '',
      country = '',
      email,
      fax = '',
      password,
      phone = '',
      role = this.supplier,
    } = data;
    
    requiredFields = ['email', 'password'];
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

    return user;
  }
}

export default new Service();