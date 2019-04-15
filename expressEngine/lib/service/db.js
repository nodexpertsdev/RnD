class DbOperation {
  // count = (collection, data = {}) => {
  //   return collection.countDocuments(data);
  // }
  count = (collection) => {
    return collection.countDocuments();
  }

  create = (collection, data = {}) => {
    return collection.create(data);
  }

  find = (collection, data = {}, projection = {}) => {
    return collection.find(data, projection);
  }

  findOne = (collection, data = {}, projection = {}) => {
    return collection.findOne(data, projection);
  }
}

export default new DbOperation();