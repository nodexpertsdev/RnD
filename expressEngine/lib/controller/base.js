class Controller {
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

  response = (data) => {
    return [{
      data
    }, {
      code: "1234567890",
      status: "Success"
    }];
  }
};

export default Controller;