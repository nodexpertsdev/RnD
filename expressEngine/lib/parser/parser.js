import { error } from '../../cms/parser';

export default (controller = null, functionName = '') => async (req, res) => {
  const { params, query, body } = req;

  if (!(controller && controller[functionName])) {
    return (error: error.functionNotFound);
  }

  const result = await controller[functionName]({ params, query, body });
  // error and success will be handled by response handler
  return res.json(result);
};
