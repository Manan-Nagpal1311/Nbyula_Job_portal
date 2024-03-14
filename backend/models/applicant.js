const mongoose = require('mongoose');
const User = require('./user');
const Job  = require('./job');
const Schema = mongoose.Schema;

const applicantJobSchema = new Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: User } ,
  interested: {
    type: Boolean,
    required: true,
  },
  jobId: { type: mongoose.SchemaTypes.ObjectId, ref: Job } 
});

module.exports = mongoose.model('applicantJob', applicantJobSchema);