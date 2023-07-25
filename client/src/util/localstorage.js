class LocalStorage {
  constructor(key) {
    this.key = key;
  }

  saveData(data) {
    if (typeof data !== "object") {
      console.error("Error: data must be an object");
      return;
    }
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  getData() {
    const data = localStorage.getItem(this.key);
    return JSON.parse(data);
  }

  updateData(data) {
    if (typeof data !== "object") {
      console.error("Error: data must be an object");
      return;
    }
    localStorage.setItem(this.key, JSON.stringify(data));
  }
}

export default LocalStorage;



/****
 * import LocalStorage from './LocalStorage';

const myLocalStorage = new LocalStorage('myData');

// Lưu trữ dữ liệu object
const data = { name: 'John', age: 30 };
myLocalStorage.saveData(data);

// Lấy dữ liệu object
const retrievedData = myLocalStorage.getData();
console.log(retrievedData);

// Cập nhật dữ liệu object
const updatedData = { age: 35 };
myLocalStorage.updateData(updatedData);
 */