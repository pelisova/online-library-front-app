export default function authHeader() {
    let token = JSON.parse(localStorage.getItem('library_token'));
  
    if (token) {
      return { Authorization: 'Bearer ' + token };
    } else {
      return {};
    }
  }