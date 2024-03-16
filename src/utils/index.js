export const addKeyValue = (data, key, value) =>
	data.map(item => ({ ...item, [key]: value }));

export const findFirstFalseIndex = data =>
	data.findIndex(item => !item.completed);
