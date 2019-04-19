import { error as commonError, success } from '../../cms/common';

class responseHandler {
  success = ({ data, message }) => ({ data: data || null, message: message || success.defaultSuccessMsg });

  error = ({ error, status }) => ({ error: error || commonError.undefinedError, status: status || 500 });

  response = (data) => {
    const { error } = data;
    if (error) {
      return this.error(data);
    }
    return this.success(data);
  }
}

export default new responseHandler();
