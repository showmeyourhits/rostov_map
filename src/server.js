// @flow

// main modules
import express from 'express';
import path from 'path';
// user modules
import {pad} from './server/helpers.js';
import {dataEmmiter} from './server/dataEmmitter.js';

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

const PORT = process.env.APP_PORT || 6789;
app.listen(PORT, function () {
	console.log(`App is listening on ${PORT}`);
});