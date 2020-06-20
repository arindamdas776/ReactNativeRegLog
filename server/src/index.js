const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('../router/index');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ReactApp', { useNewUrlParser: true });

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use('/api', router);

app.listen(4000, () => {
	console.log(`Server started on 4000`);
});
