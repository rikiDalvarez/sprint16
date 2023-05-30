const { returnDouble, returnSum } = require("../app/paramsManipulation")

describe("returnDouble function", () => {
	//initializing and clearing timefakers
	beforeEach(() => { jest.useFakeTimers() });
	afterEach(() => { jest.useRealTimers() });

	test("double the value", async () => {

		const promise = returnDouble(2)
		jest.advanceTimersByTime(2000)
		const result = await promise;

		return expect(result).toBe(4)
	});

	test("expect setTimeOut to be called", async () => {
		jest.spyOn(global, 'setTimeout');
		returnDouble(1);
		jest.advanceTimersByTime(2000)
		expect(setTimeout).toHaveBeenCalledTimes(1)
	})

})

describe("returnSum function", () => {
	//initializing and clearing timefakers
	beforeEach(() => { jest.useFakeTimers() });
	afterEach(() => { jest.useRealTimers() });

	test("expect setTimeOut to be called 3 times", async () => {
		jest.spyOn(global, 'setTimeout');
		const promise = returnSum(1, 2, 3)
		jest.runAllTimers()
		const result = await promise
		expect(setTimeout).toHaveBeenCalledTimes(3)
	});

	test("expect to sum the double of each param", async () => {
		const promise = returnSum(1, 2, 3);
		jest.runAllTimers()
		const result = await promise;
		expect(result).toBe(12)
	})
})

describe("Person class", () => {
	const Person = require("../app/class")
	jest.mock("../app/class.js"); // returns an automatic mock

	beforeEach(() => {
		Person.mockClear();
	});

	test("should return an object with name property", () => {
		const riki = new Person("Ricardo")
		expect(Person).toHaveBeenCalledTimes(1)
	});

	test("should have the person name", () => {
		jest.mock('../app/class.js', () => {
			return jest.fn().mockImplementation(() => {
				return {
					name: expect.any(String),
					dirNom() { console.log("something") }
				};
			});
		});
		const mockData = {
			name: expect.any(String),
			dirNom: jest.fn()
		}
		expect(Person).not.toHaveBeenCalled();
		const riki = new Person("Ricardo");
		riki.name = "Ricardo"
		expect(Person).toHaveBeenCalled();
		expect(riki.name).toEqual(mockData.name)
	});

	test("should execute dirNom", () => {
		const consoleLogMock = jest.spyOn(console, "log").mockImplementation();

		const riki = new Person("Ricardo");
		riki.dirNom();

		expect(riki.dirNom).toHaveBeenCalled();
	})
})

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