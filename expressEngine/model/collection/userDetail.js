import mongoose from 'mongoose';

// import model library methods
import modelLib from '../lib/index';

const { Schema } = mongoose;

const userDetailSchema = new Schema({
  userId: {
    type: String,
    unique: [true, "You have already added profile details"],
    required: true,
  },
  role: {
    type: String,
    enum: modelLib.roleEnum,
    required: true,
  },
  companyName: {
    type: String,
    required: false,
  },
  contactName: {
    type: String,
    required: false,
  },
  contactTitle: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  fax: {
    type: String,
    required: false,
  },
}, { collection: "userDetail", timestamps: true });

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

export default UserDetail;
