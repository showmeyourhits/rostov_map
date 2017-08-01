// @flow

import {POSITIONS_UPDATE_TIMEOUT, busesAPIURL} from './constants';
import EventEmitter from 'events';
import http from 'http';

const BusDataEmmiter = new EventEmitter();

const intervalLoopID = setInterval(() => {
	http.get(`${busesAPIURL}?${Date.now()}`, )
}, POSITIONS_UPDATE_TIMEOUT);

export default BusDataEmmiter;
