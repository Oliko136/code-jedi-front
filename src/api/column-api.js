import axios from 'axios';
import { BASE_API_URL } from '../constants/base-url';

axios.defaults.baseURL = BASE_API_URL;

export async function getAllColumns(boardId) {
    const { data } = await axios.get(`/boards/${boardId}/columns`);
    return data;
}

export async function addColumn(boardId, body) {
    const { data } = await axios.post(`/boards/${boardId}/columns`, body);
    return data;
}

export async function getColumnById(boardId, id) {
    const { data } = await axios.get(`/boards/${boardId}/columns/${id}`);
    return data;
}

export async function updateColumn(boardId, id, body) {
    const { data } = await axios.put(`/boards/${boardId}/columns/${id}`, body);
    return data;
}

export async function deleteColumn(boardId, id) {
    const { data } = await axios.delete(`/boards/${boardId}/columns/${id}`);
    return data;
}