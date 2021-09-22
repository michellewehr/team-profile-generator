const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.office).toEqual(expect.any(Number));
})