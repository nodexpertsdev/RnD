// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { User } from '../../model';

// import messages
import { error } from '../../cms/user';
import {success} from '../../cms/user';

//import validateRequired
import { validateRequired } from '../../lib/validationHandler';

class Service extends BaseService {
  constructor() {
    super();
    this.supplier = 'supplier';
  }

  registerUser = async (data) => {
    try{
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
      } = data,
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
      return this.success(user, success.userRegistered);
    } catch(err) {
      return this.error(err);
    }
  }
}

export default new Service();