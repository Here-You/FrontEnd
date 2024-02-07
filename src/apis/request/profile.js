import { axios, axiosWithToken } from '../api';
import { API_PATH, API_URL } from '@/constants/path';

// 마이페이지 프로필 정보
const getProfileInfo = () => {
  return axios.get(API_PATH.MY_PAGE_INFO);
};
// sns
const postSnsLogin = (type, token) => {
  const url = `${API_URL.SNS_LOGIN}`;
  const res = axiosWithToken.post(url, {
    type: type,
    token: token,
  });
  return res;
};

// signup 페이지 초기 로그인 시 정보 얻어오기
const postAddInformation = (nickname, introduction) => {
  const url = `${API_URL.ADDITIONAL_INFORMATION}`;
  const res = axiosWithToken.post(url, {
    nickname: nickname,
    introduction: introduction,
  });
  return res;
};

// 닉네임 수정
const updateNickName = nickname => {
  const url = `${API_URL.UPDATE_NICKNAME}`;
  const res = axiosWithToken.post(url, {
    nickname: nickname,
  });
  return res;
};

// 한줄 소개 수정
const updateIntro = intro => {
  const url = `${API_URL.UPDATE_PROFILE_INTRO}`;
  const res = axiosWithToken.post(url, {
    intro: intro,
  });
  return res;
};

// 회원 탈퇴
const deleteWithdrawMember = () => {
  const url = `${API_URL.WITHDRAW_MEMBER}`;
  return axiosWithToken.delete(url);
};

// 공개 범위 설정
const putPublicScope = visivility => {
  const url = `${API_URL.PUBLIC_SCOPE}`;
  const res = axiosWithToken.post(url, {
    visivility: visivility,
  });
  return res;
};
export {
  getProfileInfo,
  postSnsLogin,
  updateIntro,
  updateNickName,
  deleteWithdrawMember,
  postAddInformation,
  putPublicScope,
};
