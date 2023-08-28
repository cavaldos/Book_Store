import { Result } from "antd";
import axiosConfig from "./configAPI";
import axios from "axios"

const addBook = async (values) => {
  axios.put({
    url: 'http://localhost:8001/addbook',
    method: 'POST',
    data: values,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {return response;})
  // .catch(error => {
  //   return error
  // });
}
const importBook = async (data) => {
  try {
    const response = await axios.put('http://localhost:8001/importbook', data, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
    })
    if (response.status === 200) {
      const book = response.data
      const result = `Book with ID ${book.ID} updated`
      return result
    } else if (response.status === 404) {
      addBook(data)
      .then(result => {
        return `Book with ID ${result.ID} added`
      })
    } else {
      console.log('Unexpected response status:', response.status);
    }
    return response;
    
  } catch (error) {
    return error
  }
};

export {
  addBook, importBook
};
