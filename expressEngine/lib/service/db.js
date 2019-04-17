import BaseService from './base';

const baseService = new BaseService();
class DBOperation {
  count = (collection, data = {}) => collection.countDocuments(data)

  create = (collection, data = {}) => collection.create(data)

  find = (collection, data = {}, projection = {}) => collection.find(data, projection)

  findOne = (collection, data = {}, projection = {}) => collection.findOne(data, projection)

  findAll = ({
    collection, data = {}, skip = 0, limit = 10, projection = {},
  }) => {
    const skipValue = baseService.parseNumber(skip, 0);
    const limitValue = baseService.parseNumber(limit, 10);
    return collection.find(data, projection).skip(skipValue).limit(limitValue);
  }

  deleteMany = (collection, data) => collection.deleteMany(data)

  deleteOne = (collection, data) => collection.deleteOne(data)
}

export default new DBOperation();
