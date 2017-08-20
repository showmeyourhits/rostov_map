const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	output: {
		path: path.resolve('build'),
		filename: '[name].js'
	},
	entry: {
		client_build: path.resolve('src/client/client.js'),
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
		new HtmlWebpackPlugin({
			title: 'This is bus map',
		})
	]
}
