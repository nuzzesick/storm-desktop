import { post } from './fetch';

const API_URL = 'http://localhost:8000';

export const downloadTorrent = async (id, path) => post(`${API_URL}/download`, { id, path });

export const pauseTorrent = async (id) => post(`${API_URL}/pause`, { id });

export const deleteTorrent = async (id) => post(`${API_URL}/delete`, { id });

export const deleteTorrentAndFiles = async (id) => post(`${API_URL}/delete-all`, { id });
