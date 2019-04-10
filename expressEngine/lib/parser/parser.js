export default (controller = null, functionName = '') => async (req, res) => {
  const { params, query, body } = req;

  try {
    if (!(controller && controller[functionName])) {
      throw new Error(`No function found in controller having name : ${functionName}`);
    }

    const result = await controller[functionName]({ params, query, body });

    if (result.error) {
      // Error will be directly handled by the error handler
      return res.json(result);
    }

    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
};
