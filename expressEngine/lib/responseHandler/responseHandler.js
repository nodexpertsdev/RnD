import { error as commonError, success } from '../../cms/common';

class ResponseHandler {
  success = ({ data = true, message = success.defaultSuccessMsg }) => ({ data, message });

  error = ({ error = commonError.undefinedError, status = 500 }) => ({ error, status });

  response = (res, data) => {
    const { error } = data;
    if (error) {
      res.json(this.error(data));
    }
    res.json(this.success(data));
  }
}

export default new ResponseHandler();
