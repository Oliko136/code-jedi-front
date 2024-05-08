import axios from 'axios';
import { BASE_API_URL } from '../constants/base-url';

axios.defaults.baseURL = BASE_API_URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export async function register(credentials) {
  const { data } = await axios.post('/auth/register', credentials);
  setAuthHeader(data.token);
  return data;
}

export async function logIn(credentials) {
  const { data } = await axios.post('/auth/login', credentials);
  setAuthHeader(data.token);
  return data;
}

export async function logOut(token) {
  setAuthHeader(token);
  await axios.post('/auth/logout', token);
  clearAuthHeader();
}

export async function getCurrentUser(token) {
  setAuthHeader(token);
  try {
    const { data } = await axios.get('/auth/current');
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
}

export async function needhelp(credentials) {
  const { data } = await axios.post('email/needhelp', credentials);
  return data;
}
