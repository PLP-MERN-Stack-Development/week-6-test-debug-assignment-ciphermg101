import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/bugs' });

export const fetchBugs = () => API.get('/');
export const createBug = (bug) => API.post('/', bug);
export const updateBug = (id, bug) => API.put(`/${id}`, bug);
export const deleteBug = (id) => API.delete(`/${id}`); 