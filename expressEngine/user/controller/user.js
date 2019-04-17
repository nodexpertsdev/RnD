// import base controller
import { BaseController } from '../../lib/controller';

// import service
import { UserService } from '../service';

class Controller extends BaseController {
  create = async ({body}) => {
    try{
      const userData = await UserService.registerUser(body);
      return { userId: userData.userId };
    } catch (err) {      
      // throw err;
      return err;
    }
  };
};

export default new Controller();