const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', 5, 'email@email', 'github');

    expect(engineer.name).toBe('Dave');
    // expect(engineer.id).toEqual(expect.any(Number));
    // expect(engineer.email).toEqual(expect.any(String));
    // expect(engineer.github).toEqual(expect.any(String));
})