import http from "../http-common";

class UserDataService {
  getAll() {
    console.log('getting all the users...')
    return http.get("/users");
  }

  get(username) {
    console.log(`getting the account ${username}...`)
    return http.get(`/users/${username}`);
  }

  create(data) {
    console.log(`creating new account...`)
    return http.post("/users", data);
  }

  update(username, data) {
    console.log(`updating the account ${username}...`)
    return http.put(`/users/${username}`, data);
  }

  delete(username) {
    console.log(`deleting the account ${username}...`)
    return http.delete(`/users/${username}`);
  }

  deleteAll() {
    console.log(`deleting all the users`)
    return http.delete(`/users`);
  }

  findByUsername(username) {
    console.log(`finding the account ${username}...`)
    return http.get(`/users?title=${username}`);
  }
}

export default new UserDataService();