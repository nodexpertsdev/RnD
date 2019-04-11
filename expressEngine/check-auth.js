import jwt from 'jsonwebtoken';
import config from './config';

export default (req, res, next) => {
  try {
    const token = req.headers.authkey;
    jwt.verify(token, config.KEY);
    next();
  } catch (error) {
    return res.status(403).json({
      error: true,
      message: 'Forbidden',
    });
  }
};
