const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true }
});

const UsersModel = mongoose.model('Users', UsersSchema);

module.exports = UsersModel;