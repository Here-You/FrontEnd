import { axios, axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

const getNotification = () => {
    const url = `${API_URL.NOTIFICATION}`;

  return axios.get(url);
};

export { getNotification };
