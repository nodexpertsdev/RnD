import { Schema, model } from 'mongoose';

const userTokenSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'userToken',
    timestamp: true,
  },
);
const userToken = model('userToken', userTokenSchema);

export default userToken;
