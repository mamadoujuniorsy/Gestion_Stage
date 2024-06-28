import axios from 'axios';

const backendDomain = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: backendDomain,
});

const backendAPI = {
  // Fonctions pour les utilisateurs
  getUsers: () => axiosInstance.get('/api/users'),
  getUser: (id) => axiosInstance.get(`/api/users/${id}`),
  createUser: (userData) => axiosInstance.post('/api/users', userData),
  updateUser: (id, userData) => axiosInstance.put(`/api/users/${id}`, userData),
  deleteUser: (id) => axiosInstance.delete(`/api/users/${id}`),

  // Fonctions pour les candidats
  getCandidates: () => axiosInstance.get('/api/candidates'),
  getCandidateById: (id) => axiosInstance.get(`/api/candidates/${id}`),
  createCandidate: (candidateData) => axiosInstance.post('/api/candidates', candidateData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }
  ),
  updateCandidate: (id, candidateData) => axiosInstance.put(`/api/candidates/${id}`, candidateData),
  updateCandidateStatus: (id, status) => axiosInstance.put(`/api/candidates/${id}/status`, { status }),
  deleteCandidate: (id) => axiosInstance.delete(`/api/candidates/${id}`),
  downloadCv: (id) => axiosInstance.get(`/api/candidates/download/cv/${id}`, {
    responseType: 'blob'
  }),
  downloadCoverLetter: (id) => axiosInstance.get(`/api/candidates/download/cover-letter/${id}`, {
    responseType: 'blob'
  }),
  // Fonctions pour les stages
  getStages: () => axiosInstance.get('/api/stages'),
  getStage: (id) => axiosInstance.get(`/api/stages/${id}`),
  createStage: (stageData) => axiosInstance.post('/api/stages', stageData),
  updateStage: (id, stageData) => axiosInstance.put(`/api/stages/${id}`, stageData),
  deleteStage: (id) => axiosInstance.delete(`/api/stages/${id}`),
};

export default backendAPI;
