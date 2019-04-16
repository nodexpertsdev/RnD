import BaseService from './base';
const baseService = new BaseService();
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
    const skipValue = baseService.parseNumber(skip , 0);
    const limitValue = baseService.parseNumber(limit, 10);
    return collection.find(data, projection).skip(skipValue).limit(limitValue);
  }
}

export default new DbOperation();
