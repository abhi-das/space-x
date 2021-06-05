import { dbConf } from '../config';
import mongoose from 'mongoose';

interface UserAttrs {
  email: string;
}

interface UserDoc extends mongoose.Document {
  email: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  buildUser: (attr: UserAttrs) => UserDoc;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

/* eslint-disable @typescript-eslint/no-use-before-define */
userSchema.statics.buildUser = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>(
  'User',
  userSchema,
  `${dbConf.userCollection}`,
);

export { User };
