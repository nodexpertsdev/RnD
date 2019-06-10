import { error as commonError, success } from '../../cms/common';

class ResponseHelper {
  success = ({ data = true, message = success.defaultSuccessMsg }) => ({ data, message });

  error = ({ error = commonError.undefinedError }) => ({ error });

  response = (res, data) => {
    const { error } = data;
    if (error) {
      const { status = 500, ...rest } = data;
      res.status(status).json(this.error(rest));
    } else {
      res.json(this.success(data));
    }
  };
}

export default new ResponseHelper();
