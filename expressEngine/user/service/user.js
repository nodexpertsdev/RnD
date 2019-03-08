// import service libraries
import { BaseService, DBService } from '../../lib/service/index';

// import collections
import { User } from '../../model/index';

// import messages
import {error, success} from '../../cms/user/index';

class Service extends BaseService {
  registerUser = async (data) => {
    try {

      const requiredFields = ["email", "password"];
      this.validateRequired(data, requiredFields);

      const isExist = await DBService.count(User, { email: data.email });
      if (isExist) {
        return this.error(error.alreadyRegistered);
      }


      const user = await DBService.create(User, {
        email: data.email,
        password: data.password,
      });

      return this.success(user, success.userRegistered);
    } catch(err) {
      console.log('ERROR:::::::::::::::::::::::', err);
      return this.error(err);
    }
  }
}

export default new Service();