import axiosConfig from "./axios_config";

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
