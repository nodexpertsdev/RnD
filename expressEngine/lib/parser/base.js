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

  success = (data, successMsg = 'Process compeleted successfully') => {
    if (typeof data === 'string') {
      return {
        message: data,
      };
    }
    return {
      data,
      message: successMsg,
    };
  }

  response = (res, data, statusCode = 200) => res.status(statusCode).json(data);
};

export default Parser;