function Employee() {
	if (this.constructor === Employee) {
		throw new Error("FYI: Instance of Abstract class cannot be instantiated");
	}
};

Employee.prototype.display = function () {
	return "Employee name is: " + this.empName;
}

function Manager(fullName) {
	this.empName = fullName
}

Manager.prototype = Object.create(Employee.prototype);

module.exports = { Employee, Manager }


