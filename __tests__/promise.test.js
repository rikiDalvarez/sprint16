const { returnPromise, arrFunc } = require("../app/promise")

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
