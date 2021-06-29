import { post, get } from './fetch';

const API_URL = 'http://localhost:8000';

export const downloadTorrent = async (torrentId, path) => post(`${API_URL}/download?id=${torrentId}`, { path });

export const getListOfTorrents = async () => get(`${API_URL}/torrents`);

export const getTorrentInfo = async (torrentId) => get(`${API_URL}/info?id=${torrentId}`);
