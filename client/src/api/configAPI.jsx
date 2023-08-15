import axios from "axios";

// REACT_APP_API_PORT;
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PORT,
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
