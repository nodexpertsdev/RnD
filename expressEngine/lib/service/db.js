import BaseService from './base';
import { error } from '../../cms/user';

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

  updateOne = async (collection, filter, dataToUpdate = {}) => {
    try {
      return await collection.updateOne(filter, dataToUpdate);
    } catch (err) {
      return { error: err.message };
    }
  }
}

export default new DBOperation();
