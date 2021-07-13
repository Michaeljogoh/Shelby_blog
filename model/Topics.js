const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({

	topic_name:{
		type:String,
		required:true
	}
})

const Topic = mongoose.model('topics', TopicSchema)

module.exports = Topic;