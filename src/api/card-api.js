import axios from 'axios';
import { BASE_API_URL } from '../constants/base-url';

axios.defaults.baseURL = BASE_API_URL;

export async function getAllCards(boardId, columnId) {
    const { data } = await axios.get(`/boards/${boardId}/columns/${columnId}/cards`);
    return data;
}

export async function addCard(boardId, columnId, body) {
    const { data } = await axios.post(`/boards/${boardId}/columns/${columnId}/cards`, body);
    return data;
}

export async function getCardById(boardId, columnId, id) {
    const { data } = await axios.get(`/boards/${boardId}/columns/${columnId}/cards/${id}`);
    return data;
}

export async function updateCard(boardId, columnId, id, body) {
    const { data } = await axios.put(`/boards/${boardId}/columns/${columnId}/cards/${id}`, body);
    return data;
}

export async function updateCardColumn(boardId, columnId, id, newColumn) {
    const { data } = await axios.patch(`/boards/${boardId}/columns/${columnId}/cards/${id}`, {column: newColumn});
    return data;
}

export async function deleteCard(boardId, columnId, id) {
    const { data } = await axios.delete(`/boards/${boardId}/columns/${columnId}/cards/${id}`);
    return data;
}