import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  replies: Number,
  retuits: Number,
  topic: String,
  userName: String,
  handle: String,
  time: String,
  image: String
}, {collection: 'tuits'});
export default schema;