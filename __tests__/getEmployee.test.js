const getEmployee = require("../app/getEmployee")

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

	test("if second parameter is < 0 it should received an error", async () => {
		expect.assertions(1);
		try {
			await getEmployee([], 0)
		} catch (error) {
			expect(error.message).toBe("arguments[1] must be a number bigger than 0")
		}
	})

})

//n3e1
describe("getEmployee", () => {
	const getEmployee = require("../app/getEmployee")
	const data = require("../mockData.json")
	jest.mock("../mockData.json", () => ({
		employees: [
			{
				"id": 1,
				"name": "Linux Torvalds"
			}, {
				"id": 2,
				"name": "Bill Gates"
			}, {
				"id": 3,
				"name": "Jeff Bezos"
			}]
	}))

	test("should resolve to a array", () => {
		expect(getEmployee(data, 1)).resolves.toEqual({
			"id": 1,
			"name": "Linux Torvalds"
		})
	})

})


