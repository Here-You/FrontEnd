import { axios, axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

// 탐색탭 키워드 검색, 탐색탭 메인화면
const getExploreMainHotPost = () => {
  const url = `${API_URL.SEARCH_SIGNATURE}/hot`;
  const res = axiosWithToken.get(url);
  return res;
};

const getExploreMainNewPost = () => {
  const url = `${API_URL.SEARCH_SIGNATURE}/new`;
  const res = axiosWithToken.get(url);
  return res;
};

const getSearchExploreKeyword = keyword => {
  const url = `${API_URL.SEARCH_SIGNATURE}/find?keyword=${keyword}`;
  const res = axiosWithToken.get(url);

  return res;
};

export {
  getExploreMainHotPost,
  getExploreMainNewPost,
  getSearchExploreKeyword,
};
