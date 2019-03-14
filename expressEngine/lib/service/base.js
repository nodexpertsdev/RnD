class BaseService {
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

  success = (data, successMsg = false) => {
    if (typeof data === 'string') {
      return {
        success: true,
        message: data,
      };
    }
    return {
      success: true,
      data,
      message: successMsg || 'Process compeleted successfully',
    };
  }
}

export default BaseService;