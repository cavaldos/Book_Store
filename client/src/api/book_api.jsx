import axiosConfig from "./configAPI";

const editBook = (data) => {
    axiosConfig.post('/editbook', data, {
        headers: {
        'Content-Type': 'application/json'
        },
        timeout: 5000
    })
};

export {
  editBook
};
