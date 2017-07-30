const path = require('path');

const ServerConfig = require(path.resolve('src/webpack', 'server.config.js'));
// const ClientConfig = require(path.resolve('src/webpack', 'client.config.js'));

module.exports = [
	ServerConfig,
];
