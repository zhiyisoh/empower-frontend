import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://ec2-44-201-1-236.compute-1.amazonaws.com/api/test/';

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
