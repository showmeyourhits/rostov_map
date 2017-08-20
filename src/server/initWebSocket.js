// @flow

import ws from 'ws';
import http from 'http';
import {dataEmmiter} from './dataEmmitter';
import {createSocketEvent, pad} from './helpers';
import {SOCKET_CHECK_TIMEOUT} from './constants';

export default function(server: typeof http.Server) {
	const wss = new ws.Server({server});

	wss.on('connection', (socketConnection) => {
		console.log(pad());
		console.log('Smb connected to WebSocket');
		socketConnection.isUp = true;
		console.log(pad());

		socketConnection.on('pong', () => {
			console.log('ponged');
			socketConnection.isUp = true;
		});
	});

	const pingIntervalTimer = setInterval(() => {
		console.log('Checking socket connections');
		let alive = 0;
		wss.clients.forEach((socketConnection) => {
			if (!socketConnection.isUp) {
				socketConnection.terminate;
			} else {
				alive++;
				socketConnection.ping();
				socketConnection.isUp = false;
			}
		});
		console.log('Up & running: ' + alive);
	}, SOCKET_CHECK_TIMEOUT);

	dataEmmiter.on('new_data', (data) => {
		const eventJSON = JSON.stringify(createSocketEvent('new_data', data));

		wss.clients.forEach((socketConnection) => {
			socketConnection.send(eventJSON);
		});
	});


	return wss;
}