let getEmployee = (array, id) => {

	if (!Array.isArray(array) || array.length === 0) { throw new Error("argument[0] must be an array with data") };
	if (typeof id !== "number" || id === 0) { throw new Error("arguments[1] must be a number bigger than 0") }
	return new Promise((resolve, reject) => {
		const employee = array.find((item) => { return item.id === id });
		if (employee) { resolve(employee); }
		else {
			reject(new Error("no employee found"));
		}
	})
}

module.exports = getEmployee;