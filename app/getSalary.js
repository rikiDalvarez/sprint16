const getSalary = (array, employee) => {
	if (!Array.isArray(array)) { throw new Error("argument[0] must be array") };
	return new Promise((resolve, reject) => {
		const employerSalary = array.find((item) => {
			if (item.id === employee.id) {
				let obj = { name: employee.name, salary: item.salary }
				return obj
			}
		});
		if (employerSalary) {
			console.log(employerSalary)
			resolve(employerSalary)
		} else {
			reject('not employee found')
		}
	})
}

module.exports = getSalary;