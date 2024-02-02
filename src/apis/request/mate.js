import { axios, axiosWithToken } from '../api';
import { API_PATH, API_URL } from '@/constants/path';

// 토큰이 필요없는 경우 axios를 쓰면됩니다.
const getSearchMate = searchTerm => {
  const url = `${API_URL.SEARCH_MATE}?searchTerm=${searchTerm}`;
  return axiosWithToken.get(url);
};

const postFollowMate = () => {
  const url = `${API_URL.FOLLOW_MATE}/${userId}`;
  return axiosWithToken.post(url, {
    followingId: followingId,
  });
};

const deleteUnFollowMate = () => {
  const url = `${API_URL.UNFOLLOW_MATE}/${userId}`;
  return axiosWithToken.delete(url, {
    followingId: followingId,
  });
};

const getExploreMate = () => {
  const url = `${API_URL.EXPLORE_MATE}`;
  return axiosWithToken.get(url);
};

const getMateFollower = () => {
  const url = `${API_URL.GET_MATE_FOLLOWER}`;
  return axiosWithToken.get(url);
};

const getMateFollowing = () => {
  const url = `${API_URL.GET_MATE_FOLLOWING}`;
  return axiosWithToken.get(url);
};

const postCreateMateRule = postData => {
  const { mainTitle, created, rules, invitedId } = postData;
  const url = `${API_URL.CREATE_MATE_RULE}`;
  return axiosWithToken.post(url, {
    write: {
      mainTitle: mainTitle,
      created: created,
      rules: rules.map(rule => ({
        ruleTitle: rule.ruleTitle,
        ruleDetail: rule.ruleDetail,
      })),
    },
    invitations: invitedId.map(id => ({ invitedId: id })),
  });
};

const getSearchInviteMate = searchTerm => {
  const url = `${API_URL.SEARCH_INVITE_MATE}?searchTerm=${searchTerm}`;
  return axiosWithToken.get(url);
};

const getParticipateTeamMate = () => {
  const url = `${API_URL.GET_PARTICIPATE_TEAM_MATE}`;
  return axiosWithToken.get(url);
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
  getExploreMate,
  getMateFollower,
  getMateFollowing,
  postCreateMateRule,
  getSearchInviteMate,
  getParticipateTeamMate,
  getMateSearch,
  getMateLook,
  getMateManagement,
  getRuleSearchMate,
  getRuleCheck,
};
