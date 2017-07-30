const path = require('path');

module.exports = {
	name: "server script",
	entry: path.resolve('src', 'server'),
	target: "node",
	output: {
		path: path.resolve('build'),
		filename: 'server_bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [
					{
						loader: 'babel-loader',
					}
				]
			}
		]
	}
}