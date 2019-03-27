class Parser {
  error = (err) => {
    const errMsg =
      (err.errors && err.errors[Object.keys(err.errors)[0]].message) ||
      err.message ||
      err;
    return {
      error: errMsg,
    };
  }

  success = (data, successMsg = false) => {
    if (typeof data === 'string') {
      return {
        message: data,
      };
    }
    return {
      data,
      message: successMsg || 'Process compeleted successfully',
    };
  }

  response = (res, data, statusCode = 200) => res.status(statusCode).json(data);

  validateRequired = (data = {}, required = []) => {
    const retVal = {};
    required.forEach((field) => {
      if (!(data[field] || data[field] === false || data[field] === 0)) {
        const fieldKey = field.charAt(0).toUpperCase() + field.slice(1);
        retVal[field] = `${fieldKey} is required.`;
      }
    });
    if (Object.keys(retVal).length) {
      throw retVal;
    }
  }
};

export default Parser;