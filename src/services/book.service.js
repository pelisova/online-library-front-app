import axios from 'axios';
import { API_URL } from '../helper'

class BookService {
  getAllBooks() {
    return axios.get(API_URL + 'book/getAll');
  }
}

export default new BookService();