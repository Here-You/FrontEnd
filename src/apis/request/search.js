import { axios, axiosWithToken } from '../api';
import { API_PATH, API_URL } from '@/constants/path';

//탐색탭 메인
const getSearch = () => {
  const url = `${API_URL.SEARCH_SIGNATURE}`;
  const res = axiosWithToken.get(url);
  return res;
};


export { getSearchKeyword, getSearch };
