const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  _id : String,
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  archived: {
    type: Boolean,
    required: false
  },
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: User } ,
});

module.exports = mongoose.model('Job', jobSchema);