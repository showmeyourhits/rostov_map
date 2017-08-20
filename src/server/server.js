// @flow

// main modules
import http from 'http';
import express from 'express';
import path from 'path';
// user modules
import {pad} from './helpers.js';
import {dataEmmiter} from './dataEmmitter.js';
import initWebSockets from './initWebSocket';

const PORT = process.env.APP_PORT || 6189;
const app = express();
const server = http.createServer(app);
const WSServer = initWebSockets(server);

app.use(express.static(path.resolve('build'), {
	dotfiles: 'allow',
}));

server.listen(PORT, function () {
	console.log(`App is listening on ${PORT}`);
});