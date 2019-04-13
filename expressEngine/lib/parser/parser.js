import { error } from '../../cms/parser/index';

export default (controller = null, functionName = '') => async (req, res, next) => {
  const { params, query, body } = req;

  try {
    if (!(controller && controller[functionName])) {
      throw new Error(error.functionNotFound);
    }

    const result = await controller[functionName]({ params, query, body });
    return res.json(result);
  } catch (err) {
    err.status = 404;
    next(err);
  }
};
