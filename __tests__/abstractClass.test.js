
//n2e3
describe("abstract Class", () => {
	const { Employee, Manager } = require("../app/abstractClass")

	test("should throw an error intaciating Employee class", () => {
		function createOdie(name) {

			const odie = new Employee(name)
			return odie
		}
		expect(createOdie).toThrow(Error)
	});

	test("Should create an object", () => {
		const jam = new Manager("Jamming")
		expect(jam.empName).toBe("Jamming")
	})

	test("should inherit display method from Employee class", () => {
		const fullName = "John Doe";
		const manager = new Manager(fullName);
		expect(manager.display()).toBe("Employee name is: " + fullName);
	});
})
