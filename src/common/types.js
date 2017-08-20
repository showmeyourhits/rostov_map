// @flow

export type SocketEventT = {
	event: 'new_data',
	data: BusDataT[],
};

export type BusDataT = {
	'unknown': string,
	'route': string,
	'latitude': string,
	'longtitude': string,
	'speed': string,
	'direction': string,
	'plate': string,
};
