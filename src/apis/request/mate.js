import { axios, axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

// 토큰이 필요없는 경우 axios를 쓰면됩니다.
const getSearchMate = searchTerm => {
  // SEARCH_MATE: `/api/${VERSION}/${API_BASE.MATE}/search`,
  // 백엔드 API : api/v1/mate/search
  const url = `${API_URL.SEARCH_MATE}?searchTerm=${searchTerm}`;
  return axiosWithToken.get(url);
};

const postFollowMate = userId => {
  // FOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow/:userId`,
  // 백엔드 API : api/v1/mate/follow/:userId
  const url = `${API_URL.FOLLOW_MATE}/${userId}`;
  return axiosWithToken.post(url, {
    followingId: followingId,
  });
};

const deleteUnFollowMate = userId => {
  // UNFOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow/:userId`,
  // 백엔드 API : api/v1/mate/follow/:userId
  const url = `${API_URL.UNFOLLOW_MATE}/${userId}`;
  return axiosWithToken.delete(url, {
    followingId: followingId,
  });
};

const getExploreMate = (userId, pageParam, limit) => {
  // EXPLORE_MATE: `/api/${VERSION}/${API_BASE.MATE}/explore/:userId`,
  // 백엔드 API : api/v1/mate/explore/:userId
  const url = `${API_URL.EXPLORE_MATE}/${userId}?limit=${limit}&cursor=${pageParam}`;
  console.log(userId, pageParam, limit);
  return axiosWithToken.get(url);
};

const getMateFollower = () => {
  // GET_MATE_FOLLOWER: `/api/${VERSION}/${API_BASE.MATE}/followList/:userId`,
  // 백엔드 API : api/v1/mate/followerList/:userId
  const url = `${API_URL.GET_MATE_FOLLOWER}`;
  return axiosWithToken.get(url);
};

const getMateFollowing = () => {
  // GET_MATE_FOLLOWING: `/api/${VERSION}/${API_BASE.MATE}/followingList/:userId`,
  // 백엔드 API : api/v1/mate/followingList/:userId
  const url = `${API_URL.GET_MATE_FOLLOWING}`;
  return axiosWithToken.get(url);
};

const postCreateMateRule = postData => {
  // CREATE_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/write`,
  // 백엔드 API : api/v1/mate/rule/write
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
  // SEARCH_INVITE_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/searchMate`,
  // 백엔드 API : api/v1/mate/rule/searchMate
  const url = `${API_URL.SEARCH_INVITE_MATE}?searchTerm=${searchTerm}`;
  return axiosWithToken.get(url);
};

const getParticipateTeamMate = () => {
  // GET_PARTICIPATE_TEAM_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/participants/:ruleId`,
  // 백엔드 API : api/v1/mate/rule/participants/:ruleId
  const url = `${API_URL.GET_PARTICIPATE_TEAM_MATE}`;
  return axiosWithToken.get(url);
};

const getTeamMateRule = ruleId => {
  // GET_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/view/:ruleId`,
  // 백엔드 API : api/v1/mate/rule/view/:ruleId
  const url = `${API_URL.GET_TEAM_MATE_RULE}/${ruleId}`;
  console.log(url);
  return axiosWithToken.get(url);
};

const patchTeamMateRule = () => {
  // UPDATE_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/edit/:ruleId`,
  // 백엔드 API : api/v1/mate/rule/edit/:ruleId
  const url = `${API_URL.UPDATE_TEAM_MATE_RULE}`;
  return axiosWithToken.patch(url, {
    title: title,
    contents: contents,
  });
};

const deleteTeamMate = () => {
  // DELETE_TEAM_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/editMate/:ruleId/:userId`,
  // 백엔드 API : api/v1/mate/rule/editMate/:ruleId/:mateId
  const url = `${API_URL.DELETE_TEAM_MATE}`;
  return axiosWithToken.delete(url);
};

const postMateruleComment = () => {
  // CREATE_MATE_RULE_COMMENT: `/api/${VERSION}/${API_BASE.MATE}/rule/comment/:ruleId`,
  // 백엔드 API : /api/v1/rules/:ruleId/comments/:userId
  const url = `${API_URL.CREATE_MATE_RULE_COMMENT}`;
  return axiosWithToken.post(url);
};

const getTeamRuleList = userId => {
  // GET_TEAM_RULE_LIST: `/api/${VERSION}/${API_BASE.MATE}/rule/list/:userId`,
  // 백엔드 API : api/v1/mate/rule/list/:userId
  // const url = `${API_BASE.MATE}/rule/list/${userId}`;
  const url = `${API_URL.GET_TEAM_RULE_LIST}/${userId}`;
  console.log(url);
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
