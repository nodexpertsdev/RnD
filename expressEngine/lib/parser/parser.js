import { error } from '../../cms/parser/index';
import successHandler from '../successHandler';

export default (controller = null, functionName = '') => async (req, res, next) => {
  const { params, query, body } = req;

  try {
    if (!(controller && controller[functionName])) {
      throw new Error(error.functionNotFound);
    }

    const result = await controller[functionName]({ params, query, body });    
    const { message, data } = result;    
    res.status(200).send(successHandler(message, data, 200));
  } catch (err) {   
    err.status = 404;
    next(err);
  }
};
