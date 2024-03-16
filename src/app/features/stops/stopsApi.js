import stopsList from "data/stops_list.json";

export function fetchStops() {
	// Return a Promise to simulate an asynchronous operation
	return new Promise(resolve =>
		// Simulate a delay of 100 milliseconds before resolving the promise
		setTimeout(() => resolve({ data: stopsList.data }), 100)
	);
}
