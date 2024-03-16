class LocalService {
	static getDate(key) {
		return JSON.parse(localStorage.getItem(key));
	}

	static setDate(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}
	static removeDate(key) {
		localStorage.removeItem(key);
	}
}

export default LocalService;
