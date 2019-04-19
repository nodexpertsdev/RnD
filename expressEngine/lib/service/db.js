import BaseService from './base';
import { error } from '../../cms/user';
<<<<<<< HEAD

const baseService = new BaseService();
class DBOperation {
  count = async (collection, data = {}) => {
    try {
      return await collection.countDocuments(data);
    } catch (err) {
      return { error: err.message };
    }
  }

  create = async (collection, data = {}) => {
    try {
      return await collection.create(data);
    } catch (err) {
      return { error: err.message };
    }
  }

  findOne = async (collection, data = {}, projection = {}) => {
    try {
      return await collection.findOne(data, projection);
    } catch (err) {      
      return { error: err.message };
    }
  }

  find = async ({
    collection, data = {}, skip = 0, limit = 10, projection = {},
  }) => {
    try {
      const skipValue = baseService.parseNumber(skip, 0);
      const limitValue = baseService.parseNumber(limit, 10);
      const err = { error: error.noCollection };
      if (!collection) {
        return err;
      }
      return await collection.find(data, projection).skip(skipValue).limit(limitValue);
    } catch (err) {
      return { error: err.message };
    }
  }

  deleteMany = async (collection, data) => {
    try {
      return await collection.deleteMany(data);
    } catch (err) {
      return { error: err.message };
    }
  }

  deleteOne = async (collection, data) => {
    try {
      return await collection.deleteOne(data);
    } catch (err) {      
      return { error: err.message };
    }
  }
=======

const baseService = new BaseService();
class DBOperation {
  count = (collection, data = {}) => collection.countDocuments(data)

  create = (collection, data = {}) => collection.create(data)

  findOne = (collection, data = {}, projection = {}) => collection.findOne(data, projection)

  find = ({
    collection, data = {}, skip = 0, limit = 10, projection = {},
  }) => {
    const skipValue = baseService.parseNumber(skip, 0);
    const limitValue = baseService.parseNumber(limit, 10);
    const err = { error: error.noCollection };
    if (!collection) {
      return err;
    }
    return collection.find(data, projection).skip(skipValue).limit(limitValue);
  }

  deleteMany = (collection, data) => collection.deleteMany(data)

  deleteOne = (collection, data) => collection.deleteOne(data)
>>>>>>> 21623fefceb304b06a26d18c6e9d4ae618185142
}

export default new DBOperation();
