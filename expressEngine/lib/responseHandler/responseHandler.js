import { error as commonError, success } from '../../cms/common';

class responseHandler {
  success = ({ data = true, message = success.defaultSuccessMsg }) => ({ data, message });

  error = ({ error = commonError.undefinedError, status = 500 }) => ({ error, status });

  response = (data) => {
    const { error } = data;
    if (error) {
      return this.error(data);
    }
    return this.success(data);
  }
}

export default new responseHandler();
