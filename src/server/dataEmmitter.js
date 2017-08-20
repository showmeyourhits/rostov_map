// @flow

import {POSITIONS_UPDATE_TIMEOUT, busesAPIURL} from './constants';
import {parseDataRow} from './helpers';
import EventEmitter from 'events';
import http from 'http';

export const dataEmmiter = new EventEmitter();

const startRequestLoop = () => setInterval(() => {
	const now = Date.now();

	http.get(`${busesAPIURL}?${now}`, (res) => {
		let data = '';

		console.log('fetched data at %s', now);

		res.on('data', (chunk) => {
			data += chunk;
		})

		res.on('end', () => {
			const rows = data.split('\n');
			const dataArray = rows.slice(0, rows.length - 1).map(parseDataRow);
			dataEmmiter.emit('new_data', dataArray);
		})
	});
}, POSITIONS_UPDATE_TIMEOUT);

export const requestLoopTimer = startRequestLoop();

