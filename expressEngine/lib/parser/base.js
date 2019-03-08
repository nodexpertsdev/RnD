class Parser {
  error = (err) => {
    const errMsg =
      (err.errors && err.errors[Object.keys(err.errors)[0]].message) ||
      err.message ||
      err;
    return {
      message: errMsg,
      error: true,
    };
  }

  response = (res, data, statusCode = 200) => res.status(statusCode).json(data);
};

export default Parser;