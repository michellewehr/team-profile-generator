const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 5, 'email@email');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets employee name value', () => {
    const employee = new Employee('Dave', 5, 'email@email');

    expect(employee.getName()).toBe('Dave');
})

test('gets employee id value', () => {
    const employee = new Employee('Dave', 6, 'email@email');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('gets employee email', () => {
    const employee = new Employee('Dave', 6, 'email@email');

    expect(employee.getEmail()).toEqual(expect.any(String));
})