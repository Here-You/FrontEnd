import { axios, axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

//무한스크롤
const getSearchMate = searchTerm => {
  // SEARCH_MATE: `/api/${VERSION}/${API_BASE.MATE}/search`,
  // 백엔드 API : api/v1/mate/search
  const url = `${API_URL.SEARCH_MATE}?searchTerm=${searchTerm}`;
  console.log(url);
  return axiosWithToken.get(url);
};

const postFollowMate = followId => {
  // FOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/search`,
  // 백엔드 API : api/v1/mate/search
  const url = `${API_URL.FOLLOW_MATE}?followId=${followId}`;
  console.log(url);
  return axiosWithToken.post(url);
};

const deleteUnFollowMate = followId => {
  // UNFOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/search`,
  // 백엔드 API : api/v1/mate/follow/:followId
  const url = `${API_URL.UNFOLLOW_MATE}/${followId}`;
  console.log(url);
  return axiosWithToken.delete(url, {
    followId: followId,
  });
};

//무한스크롤
const getExploreMate = (userId, pageParam, limit) => {
  // EXPLORE_MATE: `/api/${VERSION}/${API_BASE.MATE}/explore/:userId`,
  // 백엔드 API : api/v1/mate/explore/:userId
  const url = `${API_URL.EXPLORE_MATE}/${userId}?limit=${limit}&cursor=${pageParam}`;
  console.log(userId, pageParam, limit);
  return axiosWithToken.get(url);
};

const getMateFollower = () => {
  // GET_MATE_FOLLOWER: `/api/${VERSION}/${API_BASE.MATE}/followerList`,
  // 백엔드 API : api/v1/mate/followerList
  const url = `${API_URL.GET_MATE_FOLLOWER}`;
  console.log(url);
  return axiosWithToken.get(url);
};

const getMateFollowing = () => {
  // GET_MATE_FOLLOWING: `/api/${VERSION}/${API_BASE.MATE}/followingList`,
  // 백엔드 API : api/v1/mate/followingList/:userId
  const url = `${API_URL.GET_MATE_FOLLOWING}`;
  console.log(url);
  return axiosWithToken.get(url);
};

const postCreateMateRule = postData => {
  // CREATE_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/write`,
  // 백엔드 API : api/v1/mate/rule/write
  const { mainTitle, created, rules, invitedId } = postData;
  console.log(invitedId);
  const url = `${API_URL.CREATE_MATE_RULE}`;
  console.log(url);
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

//무한스크롤
const getSearchInviteMate = searchTerm => {
  // SEARCH_INVITE_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/searchMate`,
  // 백엔드 API : api/v1/mate/rule/searchMate
  const url = `${API_URL.SEARCH_INVITE_MATE}?searchTerm=${searchTerm}`;

  return axiosWithToken.get(url);
};

const getParticipateTeamMate = ruleId => {
  // GET_PARTICIPATE_TEAM_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/participants`,
  // 백엔드 API : api/v1/mate/rule/participants/:ruleId
  const url = `${API_URL.GET_PARTICIPATE_TEAM_MATE}/${ruleId}`;
  console.log(url);
  return axiosWithToken.get(url);
};

//무한스크롤
const getTeamMateRule = ruleId => {
  // GET_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/view`,
  // 백엔드 API : api/v1/mate/rule/detail/:ruleId/:cursor/:take
  const url = `${API_URL.GET_TEAM_MATE_RULE}/${ruleId}`;
  console.log(url);
  return axiosWithToken.get(url);
};

const patchTeamMateRule = (ruleId, editData) => {
  // UPDATE_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/edit/:ruleId`,
  // 백엔드 API : api/v1/mate/rule/edit/:ruleId
  const { mainTitle, rules } = editData;
  const url = `${API_URL.UPDATE_TEAM_MATE_RULE}/${ruleId}`;
  console.log(url);
  return axiosWithToken.patch(url, {
    mainTitle: mainTitle,
    rules: rules.map(rule => ({
      ruleTitle: rule.ruleTitle,
      ruleDetail: rule.ruleDetail,
    })),
  });
};

const deleteTeamMate = (ruleId, userId) => {
  // DELETE_TEAM_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/editMate/:ruleId/:userId`,
  // 백엔드 API : api/v1/mate/rule/editMate/:ruleId/:mateId
  const url = `${API_URL.DELETE_TEAM_MATE}/${ruleId}/${userId}`;
  console.log(url);
  return axiosWithToken.delete(url);
};

const postMateruleComment = ruleId => {
  // CREATE_MATE_RULE_COMMENT: `/api/${VERSION}/${API_BASE.MATE}/rule`,
  // 백엔드 API : /api/v1/mate/rule/:ruleId
  const url = `${API_URL.CREATE_MATE_RULE_COMMENT}/${ruleId}`;
  console.log(url);
  return axiosWithToken.post(url);
};

const getTeamRuleList = () => {
  // GET_TEAM_RULE_LIST: `/api/${VERSION}/${API_BASE.MATE}/rule/list`,
  // 백엔드 API : api/v1/mate/rule/list
  const url = `${API_URL.GET_TEAM_RULE_LIST}`;
  console.log(url);
  return axiosWithToken.get(url);
};

const deleteTeamRuleList = ruleId => {
  // DELETE_TEAM_RULE_LIST : `/api/${VERSION}/${API_BASE.MATE}/rule/list`,
  // 백엔드 API : api/v1/mate/rule/list/:ruleId
  const url = `${API_URL.DELETE_TEAM_MATE}/${ruleId}`;
  console.log(url);
  return axiosWithToken.delete(url);
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
  deleteTeamRuleList,
};
