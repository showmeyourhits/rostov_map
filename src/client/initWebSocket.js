export default function() {
	const ws = new WebSocket(`ws://${window.location.host}`);

	return ws;
}