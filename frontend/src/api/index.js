import axios from 'axios';

const backendDomain = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: backendDomain,
});

const backendAPI = {  
  getUsers: () => axiosInstance.get('/api/users'),
  getUser: (id) => axiosInstance.get(`/api/users/${id}`),
  createUser: (userData) => {
    console.log('Creating user:', userData);
    return axiosInstance.post('/api/users', userData);
  },
  updateUser: (id, userData) => {
    console.log('Updating user:', id, userData);
    return axiosInstance.put(`/api/users/${id}`, userData);
  },
  deleteUser: (id) => {
    console.log('Deleting user:', id);
    return axiosInstance.delete(`/api/users/${id}`);
  },
};

export default backendAPI;
