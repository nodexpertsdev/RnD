import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class LoginHelper {
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
      return { error: err };
    }
  };

  createToken = async ({ data }) => {
    try {
      const { key = 'successive' } = process.env;
      const token = await jwt.sign(data, key);
      return token;
    } catch (err) {
      return { error: err };
    }
  }
}

export default new LoginHelper();
