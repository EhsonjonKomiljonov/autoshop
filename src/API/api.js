import axios from 'axios';

const host = 'http://localhost:5227';

export const API = {
  signUp: (user) => axios.post(host + '/api/users', user),
  login: (user) =>
    axios.post(
      host +
        `/api/users/login?email=${user.email}&password=${user.password.replace(
          '#',
          '%23'
        )}`
    ),
  getUser: () => axios.get(host + '/api/users'),
  addVacancy: (val) => axios.post(host + '/api/cars', val),
};
