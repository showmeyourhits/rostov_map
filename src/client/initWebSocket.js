// @flow

import type {SocketEventT} from '../common/types';

const messageHandler = (event) => {
	const eventMessage: SocketEventT = JSON.parse((event.data: string));

	switch (eventMessage.event) {
		case 'new_data': {
			console.log('recevied', eventMessage.data);
			break;
		}
		default: {
			console.log('unexpected message type: %s', eventMessage.event);
		}
	}
}

export default function() {
	const ws = new WebSocket(`ws://${window.location.host}`);
	
	ws.onmessage = messageHandler;

	return ws;
}