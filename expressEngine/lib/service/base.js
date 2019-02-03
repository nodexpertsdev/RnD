class BaseService {
  error = (err) => {
    const errMsg =
      (err.errors && err.errors && err.errors[Object.keys(err.errors)[0]].message) ||
      err.message ||
      err;
    return {
      message: errMsg,
      error: true,
    };
  }

  response = (res, data, statusCode = 200) => res.status(statusCode).json(data);

  success = (data, successMsg = false) => {
    if (typeof data === "string") {
      return {
        success: true,
        message: data,
      };
    }
    return {
      success: true,
      data,
      message: successMsg || "Process compeleted successfully",
    };
  }

  validateRequired = (data = {}, required = []) => {
    const retVal = [];
    required.forEach((field) => {
      if (!(data[field] || data[field] === false)) {
        const fieldKey = field.charAt(0).toUpperCase() + field.slice(1);
        retVal.push(`${fieldKey} is required.`);
      }
    });
    if (retVal && retVal.length) {
      throw new Error(`${retVal[0]}`);
    }
  }
}

export default BaseService;