const { Schema, model } = require('mongoose');

const CommentSchema = new Schema ({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// create the Comment model using the Comment Schema
const Comment = model('Comment', CommentSchema);

// export the model
module.exports = Comment;