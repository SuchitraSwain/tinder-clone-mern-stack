import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001",
  // baseURL:"https://git.heroku.com/tinder-backend-mern-clone.git"
});

export default instance;
