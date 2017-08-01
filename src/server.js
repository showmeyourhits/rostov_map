// @flow

// main modules
import express from 'express';
import path from 'path';
// user modules
console.log()
const {pad} = require('./server/helpers.js');

const app = express();

app.use(express.static(path.resolve('build'), {
	dotfiles: 'allow',
}));

app.get('/', function (req, res) {
	console.log(pad());
	console.log(`Requested index: ${req.ip}`);
	res.send('Hello World!')
	console.log(pad());
})

const PORT = process.env.APP_PORT;
app.listen(PORT, function () {
	console.log(`App is listening on ${PORT}`);
});