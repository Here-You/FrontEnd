import { axios, axiosWithToken } from '../api';
import { API_PATH, API_URL } from '@/constants/path';

const getProfileInfo = () => {
  return axios.get(API_PATH.MY_PAGE_INFO);
};

// const getLogin = () => {
//   const url = `${API_URL.LOGIN}`;
//   return axios.post(url);
// };
const getSnsLogin = () => {
  const url = `${API_URL.SNS_LOGIN}`;
  return axiosWithToken.post(url);
};
const updateNickName = () => {
  const url = `${API_URL.UPDATE_NICKNAME}`;
  return axios.put(url);
};
const updateIntro = () => {
  const url = `${API_URL.UPDATE_PROFILE_INTRO}`;
  return axios.put(url);
};

const getWithdrawMember = () => {
  const url = `${API_URL.WITHDRAW_MEMBER}`;
  return axios.delete(url);
};

export {
  getProfileInfo,
  getSnsLogin,
  updateIntro,
  updateNickName,
  getWithdrawMember,
};
