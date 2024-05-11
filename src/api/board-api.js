import axios from 'axios';
import { BASE_API_URL } from '../constants/base-url';

axios.defaults.baseURL = BASE_API_URL;

export async function getAllBoards() {
    const { data } = await axios.get('/boards');
    return data.result;
}

export async function addBoard(body) {
    const { data } = await axios.post('/boards', body);
    return data;
}

export async function getBoardById(id) {
    const { data } = await axios.get(`/boards/${id}`);
    return data;
}

export async function updateBoard(id, body) {
    const { data } = await axios.put(`/boards/${id}`, body);
    return data;
}

export async function deleteBoard(id) {
    const { data } = await axios.delete(`/boards/${id}`);
    return data;
}

