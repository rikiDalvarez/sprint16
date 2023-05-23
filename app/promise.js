function returnPromise(string) {
	return new Promise((res, rej) => {
		if (string.length > 5) {
			res("large name")
		} else {
			rej(new Error("too short name"))
		}
	})
}

let arrFunc = (variable, func) => {
	if (variable && func)
		return func(variable);
}

module.exports = { returnPromise, arrFunc }