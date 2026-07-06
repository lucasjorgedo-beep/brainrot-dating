import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para adicionar token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const memeAPI = {
  getMemes: () => api.get('/memes'),
  getMemeById: (id) => api.get(`/memes/${id}`),
  rateMeme: (memeId, action) => api.post(`/memes/${memeId}/rate`, { action })
};

export const characterAPI = {
  getCharacters: () => api.get('/characters'),
  getCharacterById: (id) => api.get(`/characters/${id}`),
  getMatches: () => api.get('/matches')
};

export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (username, email, password) => api.post('/auth/register', { username, email, password }),
  logout: () => api.post('/auth/logout')
};

export default api;
