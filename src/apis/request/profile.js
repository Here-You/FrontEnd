import { axios, axiosWithToken } from '../api';
import { API_PATH, API_URL } from '@/constants/path';

const getProfileInfo = () => {
  return axios.get(API_PATH.MY_PAGE_INFO);
};

const postSnsLogin = (type, token) => {
  const url = `${API_URL.SNS_LOGIN}`;
  const res = axiosWithToken.post(url, {
    type: type,
    token: token,
  });
  return res;
};
const postAddInformation = (nickname, introduction) => {
  const url = `${API_URL.ADDITIONAL_INFORMATION}`;
  const res = axiosWithToken.post(url, {
    nickname: nickname,
    introduction: introduction,
  });
  return res;
};
const updateNickName = nickname => {
  const url = `${API_URL.UPDATE_NICKNAME}`;
  const res = axiosWithToken.put(url, {
    nickname: nickname,
  });
  return res;
};
const updateIntro = intro => {
  const url = `${API_URL.UPDATE_PROFILE_INTRO}`;
  const res = axiosWithToken.put(url, {
    intro: intro,
  });
  return res;
};

const deleteWithdrawMember = () => {
  const url = `${API_URL.WITHDRAW_MEMBER}`;
  return axiosWithToken.delete(url);
};

export {
  getProfileInfo,
  postSnsLogin,
  updateIntro,
  updateNickName,
  deleteWithdrawMember,
  postAddInformation,
};
