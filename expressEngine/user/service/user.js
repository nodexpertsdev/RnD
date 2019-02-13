// import service libraries
import { BaseService, DbService } from '../../lib/service/index';

// import collections
import { User, UserDetail } from '../../model/index';

// import messages
import cms from '../../cms/user/index';

class Service extends BaseService {
  registerUser = async (data) => {
    try {
      // const data = { ...req.body };

      const requiredFields = ["email", "password"];
      this.validateRequired(data, requiredFields);

      const isExist = await DbService.count(User, { email: data.email });
      if (isExist) {
        return this.error(cms.alreadyRegistered);
      }


      const user = await DbService.create(User, {
        email: data.email,
        password: data.password,
      });

      return this.success(user, cms.userRegistered);
    } catch(err) {
      console.log('ERROR:::::::::::::::::::::::', err);
      return this.error(err);
    }
  }
}

export default new Service();