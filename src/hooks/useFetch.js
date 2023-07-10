import axios from 'axios';

const { useState, useEffect } = require('react');

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [endpoint]);

  return data;
};

export { useFetch };
