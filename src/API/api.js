import axios from 'axios';

const host = 'http://localhost:5227'

export const API = {
  signUp: (user) => axios.post(host + "/api/users", user),
  addVacancy: (val) => axios.post(host + "/api/cars", val),
}