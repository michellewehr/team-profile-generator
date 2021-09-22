const Intern = require('../lib/Intern')

test('creates an engineer object', () => {
    const intern = new Intern('Dave', 5, 'email@email', 'school');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})