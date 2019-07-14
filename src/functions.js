const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: val => val,
  createUser: () => {
    const user = {
      firstName: 'Brad',
      lastName: 'Traversy',
    };
    
    return user;
  },
  fetchUser: (userId) => axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.data)
    .catch(err => `Fail to fetch user ${userId}`)
};

module.exports = functions;