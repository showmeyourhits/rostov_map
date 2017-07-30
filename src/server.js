const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve('build'), {
	dotfiles: 'allow',
}));

app.get('/', function (req, res) {
	console.log(`Requested index: ${req.ip}`);
	res.send('Hello World!')
})

const PORT = 6789;

app.listen(PORT, function () {
	console.log(`App is listening on ${6789}`);
});