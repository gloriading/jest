const axios = require('axios');

const fetchData = () => {
  console.log('Fetching Data....');

  return axios.get('https://jsonplaceholder.typicode.com/posts/2')
  .then(res => res.data );
};

exports.fetchData = fetchData;