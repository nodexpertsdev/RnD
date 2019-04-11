import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';

// import service libraries
import { BaseService, DBService } from '../../lib/service';

// import collections
import { User } from '../../model';

// import messages
import {error, success} from '../../cms/user';

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

  createToken = async (data) => {
    try {

      const requiredFields = ["email", "password"];
      this.validateRequired(data, requiredFields);
      // console.log("email and Pass",data.email, data.password);
      const doc = await DBService.findOne(User, { email: data.email });

      if (doc) {
        console.log("email and Pass",doc.email, doc.password);

        const result = bcrypt.compareSync(data.password, doc.password);
        console.log("result", result);
        if (!result) {
          return this.error(error.incorrectLogin);
        } else {
          const token = jwt.sign({
            userId: doc.userId
          }, config.KEY);
          return this.success(token, success.authSuccessful);
        }
      
      } else {
        return this.error(error.incorrectLogin);
      }

    } catch(err) {
      return this.error(err);
    }
  }

  deleteUser = async (id) => {
    try {
      const isExist = await DBService.findOneAndDelete(User, {_id: id});
      if(!isExist) {
        return this.error(error.idDoesNotExist);
      }
        return this.success(id, success.delete);
    } catch(err) {
      return this.error(err);
  }
}
}
export default new Service();
