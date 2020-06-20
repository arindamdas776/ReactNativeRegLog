const express = require('express');
const router = express.Router();
const UsersModel = require('../modules/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/key');
const AuthMiddleware = require('../config/requrieToken');


router.post('/signin', function (req, res, next) {

	//  check user email all ready exists 

	UsersModel.findOne({ 'email': req.body.email }, function (error, result) {
		if (error) throw error;

		if (result) {
			res.json({
				messages: "User Email all ready exists",
				success: false
			});
		} else {
			var users = new UsersModel();
			users.username = req.body.username;
			users.email = req.body.email;
			users.password = bcrypt.hashSync(req.body.password, 12);
			users.save();

			res.json({
				messages: "Users register successfully",
				success: true
			});
		}
	});
});

router.post('/login', function (req, res, next) {

	UsersModel.findOne({
		'email': req.body.email
	}).then(result => {
		if (!result) {
			res.json({
				messages: "Users Email invalid",
				success: false
			});
		} else {
			// console.log(result);
			// return;
			var isValid = bcrypt.compareSync(req.body.password, result.password);

			if (isValid == null) {
				res.json({
					messages: "Users Password invalid",
					success: false
				});
			} else {
				const payload = {
					_id: result._id,
					email: result.email,
					username: result.username
				};
				const token = jwt.sign(payload, key.key, {
					expiresIn: 60 * 60 * 24 * 7
				});

				res.json({
					messages: "Uses Login successfull",
					success: true,
					token: `${token}`
				});
			}
		}
	})
});


router.get('/profile', AuthMiddleware, function (req, res, next) {
	console.log(req.user.username);
});


module.exports = router;