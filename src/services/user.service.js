import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://44.192.110.237:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getSavedLocations() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getPastlogs() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

}

export default new UserService();
