import { error } from '../../cms/parser';
import ResponseHandler from '../ResponseHandler';

export default (controller = null, functionName = '') => async (req, res) => {
  const { params, query, body } = req;

  if (!(controller && controller[functionName])) {
    // Will be handled by response handler
    ResponseHandler.response(res, { error: error.functionNotFound });
  }

  const result = await controller[functionName]({ params, query, body });
  // error and success will be handled by response handler
  ResponseHandler.response(res, result);
};
