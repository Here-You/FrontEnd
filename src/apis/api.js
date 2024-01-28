import Axios from 'axios';

import { getAuthToken } from '@/utils/auth';

const baseURL = import.meta.env.VITE_API_URL;

const axios = Axios.create({
  baseURL,
});

const axiosWithToken = Axios.create({
  baseURL,
});

axiosWithToken.interceptors.request.use(config => {
  const accessToken = getAuthToken();
  if (config.headers && accessToken) {
    config.headers['x-access-token'] = accessToken;
  }
  return config;
});

export { baseURL, axios, axiosWithToken };
