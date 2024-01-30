import { axios, axiosWithToken } from '../api';
import { API_PATH, API_URL } from '@/constants/path';

// 토큰이 필요없는 경우 axios를 쓰면됩니다.
const getSearchMate = searchTerm => {
  const url = `${API_URL.SEARCH_MATE}?searchTerm=${searchTerm}`;
  return axiosWithToken.get(url);
};

const postFollowMate = () => {
  const url = `${API_URL.FOLLOW_MATE}`;
  return axiosWithToken.post(url);
};

const deleteUnFollowMate = () => {
  const url = `${API_URL.UNFOLLOW_MATE}`;
  return axiosWithToken.delete(url);
};

const getMateSearch = () => {
  // const url = `${API_PATH.MATE_SEARCH}`;
  // return axios.get(url);
};

const getMateLook = () => {
  // const url = `${API_PATH.MATE_LOOK}`;
  // return axios.get(url);
};

const getMateManagement = () => {
  // const url = `${API_PATH.MATE_MANAGEMENT}`;
  // return axios.get(url);
};

const getRuleSearchMate = () => {
  // const url = `${API_PATH.MATE_RULE_INVITE}`;
  // return axios.get(url);
};

const getRuleCheck = () => {
  // const url = `${API_PATH.MATE_RULE_CHECK}`;
  // return axios.get(url);
};

// 토큰이 필요한 경우 axios대신, axiosWithToken을 사용하면 됩니다.

export {
  getSearchMate,
  postFollowMate,
  deleteUnFollowMate,
  getMateSearch,
  getMateLook,
  getMateManagement,
  getRuleSearchMate,
  getRuleCheck,
};
