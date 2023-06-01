const getSalary = require("../app/getSalary")
const mockData = require("../../sprint13/mockdata")

//n1e3
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
});

//n3e1
describe("getSalaries", () => {
	const getSalary = require("../app/getSalary")
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
			}],
		salaries: [{
			id: 1,
			salary: 4000
		}, {
			id: 2,
			salary: 1000
		}, {
			id: 3,
			salary: 2000
		}]
	}))

	test("getSalary to resolve when passing array and object", async () => {
		result = await getSalary(data.salaries, data.employees[0])
		expect(result).toEqual({ id: 1, salary: 4000 })
	})
});