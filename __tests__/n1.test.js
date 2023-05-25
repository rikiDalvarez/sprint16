
const { returnPromise, arrFunc } = require("../app/promise")
const { add, subtract, multiply, devide } = require("../app/simple")
const getEmployee = require("../app/getEmployee")
const getSalary = require("../app/getSalary")
const mockData = require("../../sprint13/mockdata")

//N1E1
describe("test the functionality of the simple functions", () => {

	test('adds 1 + 2 to equal 3', () => {
		expect(add(1, 2)).toBe(3);
	});

	test("subtract 4 - 2 to equal 2", () => {
		expect(subtract(4, 2)).toBe(2)
	})

	test("multiply 2 *3  to equal 6", () => {
		expect(multiply(2, 3)).toBe(6)
	})

	test("subtract 4/2 to equal 2", () => {
		expect(devide(4, 2)).toBe(2)
	})
})

//N1E2
describe("returnPromise function", () => {

	test("work with promise", () => {
		expect.assertions(1);
		return expect(returnPromise("ricardo")).resolves.toBe("large name")
	})

	test("first parameter with less than 5 letter", () => {
		expect.assertions(1);
		return expect(returnPromise("ric")).rejects.toThrow("too short")
	});
})

describe("arrFun function", () => {

	test("to be called the callback", () => {
		const test = jest.fn();
		arrFunc("ricardo", test)
		expect(test).toHaveBeenCalled()
	});

	test("to not have been called", () => {
		const test = jest.fn();
		arrFunc("", test);
		expect(test).not.toHaveBeenCalled()
	})

})

//N1E3
describe("getEmployee function", () => {

	test("if first parameter is not array", async () => {
		expect.assertions(1);
		try {
			await getEmployee("hello", 1)
		} catch (error) {
			expect(error.message).toBe("argument[0] must be an array with data")
		}
	});

	test("first parameter shouldnt have an empty array", async () => {
		expect.assertions(1)
		try {
			await getEmployee([], 1)
		} catch (error) {
			expect(error.message).toBe("argument[0] must be an array with data")
		}
	});

	test("if second parameter is > 0 it should received an error", async () => {
		expect.assertions(1);
		try {
			await getEmployee(["a"], 0)
		} catch (error) {
			expect(error.message).toBe("arguments[1] must be a number bigger than 0")
		}
	})

})

describe("getSalary function", () => {

	test("first param is not an array", () => {
		expect.assertions(1)
		expect(() => { getSalary("", 1) }).toThrow(Error)
	});

	test("should return an object when passed 2 correct params", () => {

		const result = {
			id: expect.any(Number),
			salary: expect.any(Number)
		}

		expect.assertions(1)
		return expect(getSalary(mockData.salaries, mockData.employees[0])).resolves.toStrictEqual(result)
	})

	test("second param is not an object", async () => {
		expect.assertions(1)
		try {
			await getSalary([], 1)
		} catch (error) {
			expect(error.message).toBe(undefined)
		}
	});

})




