import { axios, axiosWithToken } from '../api';
import { API_PATH } from '@/constants/path';

// 토큰이 필요없는 경우 axios를 쓰면됩니다.
const getMateSearch = () => {
  return axios.get(API_PATH.MATE_SEARCH);
};

// 토큰이 필요한 경우 axios대신, axiosWithToken을 사용하면 됩니다.

export { getMateSearch };
