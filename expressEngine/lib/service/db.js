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
  updateOne = (collection, data = {}, projection = {}) => {
    return collection.updateOne(data, projection);
  }

  updateMany = (collection, data = {}, projection = {}) => {
    return collection.updateMany(data, projection);
  }
}

export default new DbOperation();