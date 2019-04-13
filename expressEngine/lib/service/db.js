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
  findAll = (collection, {skip = 0, limit = 10}, projection ={}) => {
    console.log('skip and limit in query ', skip, limit);
    return collection.find().skip(+(skip)).limit(+(limit))
  }
}

export default new DbOperation();