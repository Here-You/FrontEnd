import { axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

// 알림 페이지
const getNotification = () => {
  const url = `${API_URL.NOTIFICATION}`;
  const res = axiosWithToken.get(url);
  return res;
};

const getUnReadNotification = () => {
  const url = `${API_URL.NOTIFICATION}/unread`;
  const res = axiosWithToken.get(url);
  return res;
};

export { getNotification, getUnReadNotification };
