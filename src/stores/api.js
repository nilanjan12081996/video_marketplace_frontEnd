import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

const formDataURL = ['/project/step1', '/project/files'];
api.interceptors.request.use((req) => {
  let userTokenData;
  try {
    userTokenData = JSON.parse(localStorage.getItem('videoToken'));
  } catch (error) {
    userTokenData = null;
  }
  let token = userTokenData && userTokenData.token ? userTokenData.token : null;
  // Temp Hack to make formData work
  // req.headers['Content-Type'] = 'application/json';
  req.headers['Content-Type'] = 'application/json';

  if (formDataURL.includes(req.url)) {
    req.headers['Content-Type'] = 'multipart/form-data';
  }
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 403].includes(error.response.status)) {
      localStorage.removeItem('videoToken');
    }
    return Promise.reject(error);
  }
);

export default api;
