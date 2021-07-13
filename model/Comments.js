const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comment:{
    type: String,
    required:true
}, 
    commenter:{
        type:String,
        required:true
    },

    topic_name:{
        type:String,
        required:true
    },

    comment_email:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    }
})

const Comment = mongoose.model('comments', CommentSchema)

module.exports = Comment;