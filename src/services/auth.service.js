import axios from 'axios';
import { API_URL } from '../helper'
import authHeader from './auth-header';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'user/signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('library_token', JSON.stringify(response.data.accessToken));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('library_token');
  }

  register(user) {
    return axios.post(API_URL + 'user/signup', {
      firstName: user.firstName,
      lastName: user.lastName,  
      email: user.email,
      password: user.password
    });
  }

  getUserByEmail(email) {
    return axios.get(API_URL + 'user/getByEmail/' + email, { headers: authHeader() }).then(response => {
      return response.data
    });
  }
}

export default new AuthService();