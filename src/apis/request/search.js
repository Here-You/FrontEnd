import { axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

// 탐색탭 키워드 검색, 탐색탭 메인화면
const getSearchKeyWord = keyword => {
  let url = `${API_URL.SEARCH_SIGNATURE}`;

  if (keyword) {
    url += `?search=${keyword}`;
  }

  const res = axiosWithToken.get(url);
  return res;
};

export { getSearchKeyWord };
