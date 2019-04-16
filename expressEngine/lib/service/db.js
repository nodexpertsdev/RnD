class DbOperation {
  count = (collection, data = {}) => {
    return collection.countDocuments(data);
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

  deleteMany = (collection, data) => {
    return collection.deleteMany(data);
  }

  deleteOne = (collection, data) => {
    return collection.deleteOne(data);
  }
}

export default new DbOperation();
