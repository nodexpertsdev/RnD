const mongoose = require('mongoose');

class BaseHelper {
  validateId = (data) => {
    const result = mongoose.Types.ObjectId.isValid(data);
    return result;
  };
}
export default new BaseHelper();
