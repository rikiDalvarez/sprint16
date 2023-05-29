
async function myAsyncFunc(callback) {
	try {
		const result = await callback();
		return result
	} catch (error) {
		console.error(error)
	}
}

function myPromiseFunc() {
	return new Promise((res) => {
		setTimeout(() => {
			res("the promise is resolved after 2 sec")
		}, 2000)
	})
}

module.exports = { myAsyncFunc, myPromiseFunc }