import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserHelper {
  getProjection = () => {
    const projection = {
      email: 1,
      password: 1,
    };
    return projection;
  };

  checkUser = async ({ loginPassword = '', hashPassword = '' }) => {
    try {
      const match = await bcrypt.compare(loginPassword, hashPassword);
      return match;
    } catch (err) {
      return { error: 'not match' };
    }
  };

  createToken = async ({ data }) => {
    try {
      const token = await jwt.sign(data, 'successive');
      return token;
    } catch (err) {
      return { error: 'error in generate token' };
    }
  }
}

export default new UserHelper();
