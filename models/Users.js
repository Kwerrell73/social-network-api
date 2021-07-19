///***Notes change over to users model

//import mongoose dependencies
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thoughts'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
)

// get total count of friends
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

// create the Users model using the Users Schema
const Users = model('Users', UserSchema);

// Export Users module
module.exports = Users;