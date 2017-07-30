const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack2-plugin');

module.exports = {
	output: {
		path: path.resolve('build'),
		filename: '[chunkname].js'
	},
	entry: {
		// client: path.resolve('src', 'client'),
		server: path.resolve('src', 'server'),
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
		],
	},
	plugins: [
	]
}
