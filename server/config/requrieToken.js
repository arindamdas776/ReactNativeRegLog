const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UsersModel = require('../modules/users');
const key = require('./key');

module.exports = (req, res, next) => {
	const authorization = req.headers.authorization;

	if (!authorization) {
		return res.json({
			messages: "User Need to Login first",
			success: false
		});
	}
	const token = authorization.replace("Bearer", "");

	jwt.verify(token, key.key, function (error, decode) {

		if (decode) {
			UsersModel.findById(decode._id).then(result => {
				req.user = result;

				next();
			}).catch(error => {
				throw error;
			})
		}
	})
}