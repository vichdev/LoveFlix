import axios, { AxiosRequestConfig } from "axios";

export function getTokenStorage () {
  const TOKEN = sessionStorage.getItem('usuario') || ''
  return TOKEN
}

const api = axios.create({
  baseURL: "https://api-loveflix.herokuapp.com/",
});

api.interceptors.request.use(config => {
  config.headers!.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODVlNDY3ZGEwM2RiN2EzODg2OWRiYSIsImlhdCI6MTYzNjE2NjExOCwiZXhwIjoxNjM2MjUyNTE4fQ.f5sGTwXHmTI_ko5y99iehtrF5giuOHkfv79B31dXebk`;
  return config
});

export default api;
