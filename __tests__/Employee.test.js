const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
})