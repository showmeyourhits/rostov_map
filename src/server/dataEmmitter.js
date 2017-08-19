// @flow

import {POSITIONS_UPDATE_TIMEOUT, busesAPIURL} from './constants';
import {parseDataRow} from './helpers';
import EventEmitter from 'events';
import http from 'http';

const dataEmmiter = new EventEmitter();

const startRequestLoop = () => setInterval(() => {
	http.get(`${busesAPIURL}?${Date.now()}`, (res) => {
		console.log('fetched data');
		let data = '';
		res.on('data', (chunk) => {
			data += chunk;
		})
		res.on('end', () => {
			const rows = data.split('\n');
			console.log('rows.length', rows.length);
			console.log(rows[100]);
			console.log(parseDataRow(rows[100]));
		})
	});
}, POSITIONS_UPDATE_TIMEOUT);

export const requestLoopTimer = startRequestLoop();

