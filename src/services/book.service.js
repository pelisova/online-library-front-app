import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from '../helper'

class BookService {
  getAllBooks() {
    return axios.get(API_URL + 'book/getAll');
  }

//   getUserBoard() {
//     return axios.get(API_URL + 'user', { headers: authHeader() });
//   }

//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}

export default new BookService();