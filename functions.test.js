const functions = require('./functions');

test('2 + 2 equals 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('2 + 2 NOT equals 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be false', () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// or use toEqual
test('Should be false', () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: 'Brad',
    lastName: 'Traversy',
  });
});

test('Should be under 1600', () => {
  expect(functions.add(500, 500)).toBeLessThan(1600);
});

test('There is no o in students', () => {
  expect('students').not.toMatch(/o/);
  // expect('studenOts').not.toMatch(/o/i);
});

test('Admin should be in user name', () => {
  const userNames = ['adam', 'karen', 'joe', 'admin'];
  expect(userNames).toContain('admin');
});

// Working with async data

// Promise
test('user fetched name sould be Ervin Howell, test 1', () => {
  expect.assertions(1);
  return functions.fetchUser()
  .then(data => {
    expect(data.name).toEqual('Ervin Howell');
  })
});

// Async
test('user fetched name sould be Ervin Howell, test 2', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Ervin Howell');
});

