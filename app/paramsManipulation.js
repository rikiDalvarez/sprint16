function returnDouble(number) {
	if (typeof number !== "number") throw new Error("param must be a number")
	return new Promise(res => {
		setTimeout(() => { res(number * 2) }, 2000);
	});
}

async function returnSum(a, b, c) {
	if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") throw new Error("parameters must be of a primite value number")
	/* const dub1 = await returnDouble(a);
	const dub2 = await returnDouble(b)
	const dub3 = await returnDouble(c) */
	const [n1, n2, n3] = await Promise.all([returnDouble(a), returnDouble(b), returnDouble(c)])
	return n1 + n2 + n3
}

module.exports = { returnDouble, returnSum }