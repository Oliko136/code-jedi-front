import axios from 'axios';
import { BASE_API_URL } from '../constants/base-url';

axios.defaults.baseURL = BASE_API_URL;

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

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

export async function logOut() {
const {data} =  await axios.post('/auth/logout');
    // await axios.post('/auth/logout');
    clearAuthHeader();
    return data
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