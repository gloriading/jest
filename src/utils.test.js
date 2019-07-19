// jest.mock('./http');

const { loadTitle } = require('./utils');

test('should print an uppercase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('QUI EST ESSE');
  });
});

// Don't test if API is working here, that should be tested at the backend. And don't test third party API. Focus on the code we want to test.

// create a __mock__ folder the same level as the source code
