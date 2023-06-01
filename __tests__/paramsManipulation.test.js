const { returnDouble, returnSum } = require("../app/paramsManipulation")

//n2e1
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
