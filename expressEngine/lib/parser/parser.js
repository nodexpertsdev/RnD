import { error } from '../../cms/parser/index';
import successHandler from '../successHandler';

export default (controller = null, functionName = '') => async (req, res) => {
  const { params, query, body } = req;

  try {
    if (!(controller && controller[functionName])) {
      throw new Error(error.functionNotFound);
    }

    const result = await controller[functionName]({ params, query, body });

    if (result.error) {
      // Error will be directly handled by the error handler
      return res.json(result);
    }
    const { message, data } = result;
    return res.send(successHandler(message, data));
  } catch (error) {
    return res.json(error);
  }
};
