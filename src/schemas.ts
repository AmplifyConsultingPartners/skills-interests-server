import mongoose, {Schema} from "mongoose";

const DataPointSchema = new Schema({
  x: Number,
  y: Number,
  tag: String,
});

const PersonSchema = new Schema({
  firstName: String,
  lastName: String,
  role: String,
  title: String,
  data: [DataPointSchema],
});

export const PersonModel = mongoose.model('Person', PersonSchema);
