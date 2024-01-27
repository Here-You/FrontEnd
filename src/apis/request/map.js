import { axios, axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

// 토큰이 필요 없는 경우 axios를 사용하면 됩니다.
const getMonthlyJourney = () => {
  const url = `${API_URL.GET_JOURNEY_MAP}`;
  return axios.get(url);
};

// 토큰이 필요한 경우 axiosWithToken을 사용하면 됩니다.

export { getMonthlyJourney };
