const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Dave', 5, 'email@email', 'school');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('the get property functions', () => {
    const intern = new Intern('Dave', 5, 'email@email.com', 'Eastern');

    expect(intern.getName()).toBe('Dave');
    expect(intern.getEmail()).toBe('email@email.com');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getSchool()).toEqual(expect.any(String));
})