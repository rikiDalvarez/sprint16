const { myAsyncFunc, myPromiseFunc } = require("../app/asyncFunc")

//n1e4
describe("myPromiseFunc", () => {

	test("to be resolved", () => {
		return expect(myPromiseFunc()).resolves.toBe('the promise is resolved after 2 sec');
	});

	test('should resolve after 2 sec', async () => {
		jest.useFakeTimers();
		const promise = myPromiseFunc();
		jest.advanceTimersByTime(2000)

		const result = await promise;
		expect(result).toBe('the promise is resolved after 2 sec')

		jest.useRealTimers()
	})

});

describe("myAsyncFunc", () => {

	test("should be resolved", async () => {
		return expect(await myAsyncFunc(myPromiseFunc)).toBe(
			'the promise is resolved after 2 sec')
	})

	test("should be resolved after 2 sec", async () => {
		jest.useFakeTimers();

		const promise = myAsyncFunc(myPromiseFunc);
		jest.advanceTimersByTime(2000)

		const result = await promise;
		expect(result).toBe('the promise is resolved after 2 sec')

		jest.useRealTimers()
	})

	test("should assert 1 func inside myAsyncFunc", () => {
		const test = jest.fn();
		expect.assertions(1);
		myAsyncFunc(test)
		expect(test).toHaveBeenCalled();
	})
})
