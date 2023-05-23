const { add, subtract, multiply, devide } = require("../app/simple")

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