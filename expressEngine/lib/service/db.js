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
  findAll = ({collection, data = {}, skip = 0, limit = 10 , projection = {}}) => {
    const skipValue = isNaN(skip) ? 0 : parseInt(skip, 10);
    const limitValue = isNaN(limit) ? 0 : parseInt(limit, 10);
    return collection.find(data, projection).skip(skipValue).limit(limitValue);
  }
}

export default new DbOperation();
