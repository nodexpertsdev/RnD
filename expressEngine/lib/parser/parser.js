import { error } from '../../cms/parser';

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

    return res.json(result);
  } catch (err) {
    return res.json(err);
  }
};
