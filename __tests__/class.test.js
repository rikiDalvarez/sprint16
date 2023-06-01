
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