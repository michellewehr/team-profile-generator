const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Dave', 5, 'email@email', 43);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
})

test('the get property functions', () => {
    const manager = new Manager('Dave', 5, 'email@email.com', 'Eastern');

    expect(manager.getName()).toBe('Dave');
    expect(manager.getEmail()).toBe('email@email.com');
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getOffice()).toEqual(expect.any(String));
    
})