import { axios, axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

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

const getTeamMateRule = () => {
  const url = `${API_URL.GET_TEAM_MATE_RULE}`;
  return axiosWithToken.get(url);
};

const patchTeamMateRule = () => {
  const url = `${API_URL.UPDATE_TEAM_MATE_RULE}`;
  return axiosWithToken.patch(url);
};

const deleteTeamMate = () => {
  const url = `${API_URL.DELETE_TEAM_MATE}`;
  return axiosWithToken.delete(url);
};

const postMateruleComment = () => {
  const url = `${API_URL.CREATE_MATE_RULE_COMMENT}`;
  return axiosWithToken.post(url);
};

const getTeamRuleList = () => {
  const url = `${API_URL.GET_TEAM_RULE_LIST}`;
  return axiosWithToken.get(url);
};

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
  getTeamMateRule,
  patchTeamMateRule,
  deleteTeamMate,
  postMateruleComment,
  getTeamRuleList,
};
