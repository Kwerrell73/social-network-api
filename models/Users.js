///***Notes change over to users model

//import mongoose dependencies
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema(
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
      // use REGEX to validate correct email
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
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
UsersSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

// create the Users model using the Users Schema
const Users = model('Users', UsersSchema);

// Export Users module
module.exports = Users;