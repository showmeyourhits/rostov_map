// @flow

export const pad = (str: string = '#', len: number = 40): string => ''.padStart(40, '#');

export const parseDataRow = (dataRow: string) => {
	const data = dataRow.split(',');

	return {
		route: data[1],
		latitude: parseInt(data[2], 10),
		longtitude: parseInt(data[3], 10),
		speed: parseInt(data[4]) || 0,
		direction: parseInt(data[5]) || 0,
		plate: data[6],
	}
}