import axios from 'axios';
import { BASE_API_URL } from '../constants/base-url';

axios.defaults.baseURL = BASE_API_URL;

export async function updateUserInfo(body) {
    const { data } = await axios.put('/users', body);
    return data;
}

export async function updateUserTheme(theme) {
    const { data } = await axios.patch('/users', theme);
    return data;
}

export async function updateUserAvatar(file) {
    const { data } = await axios.patch('/users/avatars', file, {
        headers: {
          'Content-Type': 'multipart/form-data'
          
        }
    });
    return data;
}