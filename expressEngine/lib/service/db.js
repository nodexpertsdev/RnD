class DbOperation {
  count = (collection, data = {}) => {
    try {
      return collection.countDocuments(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  create = (collection, data = {}) => {
    try {
      return collection.create(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  find = (collection, data = {}, projection = {}) => {
    try {
      return collection.find(data, projection);
    } catch (err) {
      throw new Error(err);
    }
  }

  findOne = (collection, data = {}, projection = {}) => {
    try {
      return collection.findOne(data, projection);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new DbOperation();