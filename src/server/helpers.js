// @flow
import zipObject from 'lodash.zipobject';
import type {BusDataT} from './types';

export const pad = (str: string = '#', len: number = 40): string => ''.padStart(40, '#');

const dataFields = [
	'unknown',
	'route',
	'latitude',
	'longtitude',
	'speed',
	'direction',
	'plate'
];

export const parseDataRow = (dataRow: string): BusDataT => {
	const data = dataRow.split(',');

	return zipObject(dataFields, data);
}

export const createSocketEvent = <T>(type: string, data: T): {event: string, data: T} => ({
	event: type,
	data,
})