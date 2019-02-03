// import service libraries
import { BaseService, DbService } from '../../lib/service/index';

// import collections
import { User, UserDetail } from '../../model/index';

// import messages
import cms from '../../cms/user/index';

class Service extends BaseService {
  registerUser = async (req, res) => {
    const data = { ...req.body };
    const requiredFields = ["email", "password"];
    this.validateRequired(data, requiredFields);

    const isExist = await DbService.count(User, { email: data.email });
    if (isExist) {
      return this.response(res, this.error(cms.alreadyRegistered), 409);
    }

    const user = await DbService.create(User, {
      email: data.email,
      password: data.password,
    });

    return this.response(res, this.success(user, cms.userRegistered));
  }
}

export default new Service();