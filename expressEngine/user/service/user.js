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
  deleteUser = async (id) => {
    try {
      const isExist = await DBService.findOne(User, {_id: id});
      if(!isExist) {
        console.log('1st');
        return this.error(error.idDoesNotExist);
      }
        await DBService.findOneAndDelete(User, {_id: id});
        return this.success(id, success.delete);
    } catch(err) {
      return this.error(err);
  }
}

  getUser = async (id) => {
    try {
      let users;
      if (id) {
       users = await DBService.findOne(User, {_id: id});
      } else {
       users = await DBService.find(User, {});

      }
      if (users) {
        return this.success(users, success.fetch);
      }
        return null;
    } catch(err) {
      console.log('ERROR:::::::::::::::::::::::', err);
      return this.error(err);
    }
  }
}

export default new Service();