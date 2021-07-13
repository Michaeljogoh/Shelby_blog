const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
room_name:{
		type:String,
		required:true
	}
})

const Room = mongoose.model('rooms', RoomSchema)

module.exports = Room;