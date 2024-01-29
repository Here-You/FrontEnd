import { axios, axiosWithToken } from '../api';
import { API_PATH, API_URL } from '@/constants/path';

const getProfileInfo = () => {
  return axios.get(API_PATH.MY_PAGE_INFO);
};

const getSnsLogin = () => {
  const url = `${API_URL.SNS_LOGIN}`;
  return axiosWithToken.post(url);
};
const updateNickName = (nickname) => {
  const url = `${API_URL.UPDATE_NICKNAME}`;
  const res = axios.put(url, {
    nickname: nickname, 
  });
  return res;
};
const updateIntro = (intro) => {
  const url = `${API_URL.UPDATE_PROFILE_INTRO}`;
  const res = axios.put(url, {
    intro: intro, 
  });
  return res;
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
