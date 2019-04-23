const mongoose = require('mongoose');

class Helper {
  validateId = (data) => {
    const result = mongoose.Types.ObjectId.isValid(data);
    return result;
  };
}
export default new Helper();
