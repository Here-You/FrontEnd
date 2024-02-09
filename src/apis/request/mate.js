import { axios, axiosWithToken } from '../api';
import { API_URL } from '@/constants/path';

// 토큰이 필요없는 경우 axios를 쓰면됩니다.
const getSearchMate = (searchTerm, cursor, take) => {
  // SEARCH_MATE: `/api/${VERSION}/${API_BASE.MATE}/search`,
  // 백엔드 API : api/v1/mate/search
  const url = `${API_URL.SEARCH_MATE}?searchTerm=${searchTerm}&cursor=${cursor}&take=${take}`;
  console.log(url);
  return axiosWithToken.get(url);
};

const postFollowMate = userId => {
  // FOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow/:userId`,
  // 백엔드 API : api/v1/mate/follow/:userId
  const url = `${API_URL.FOLLOW_MATE}/${userId}`;
  return axiosWithToken.post(url);
};

const deleteUnFollowMate = userId => {
  // UNFOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow/:userId`,
  // 백엔드 API : api/v1/mate/follow/:userId
  const url = `${API_URL.UNFOLLOW_MATE}/${userId}`;
  return axiosWithToken.delete(url);
};

const getExploreMate = (pageParam, take) => {
  // EXPLORE_MATE: `/api/${VERSION}/${API_BASE.MATE}/explore/:userId`,
  // 백엔드 API : api/v1/mate/explore/:userId
  const url = `${API_URL.EXPLORE_MATE}/?take=${take}&cursor=${pageParam}`;
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
  console.log(postData);
  // CREATE_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/write`,
  // 백엔드 API : api/v1/mate/rule/write

  const url = `${API_URL.CREATE_MATE_RULE}`;
  return axiosWithToken.post(url, postData);
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

// 여행 규칙 확인하기 (게시글)
const getTeamMateRulePost = ruleId => {
  // GET_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/view/:ruleId`,
  // 백엔드 API : api/v1/mate/rule/view/:ruleId
  const url = `${API_URL.GET_TEAM_MATE_RULE}/${ruleId}`;
  return axiosWithToken.get(url);
};

// 여행 규칙 확인하기 (댓글)
const getTeamMateRuleComment = (ruleId, cursor, take) => {
  const url = `${API_URL.GET_TEAM_MATE_RULE}/${ruleId}/comments?ruleId=${ruleId}&cursor=${cursor}&take=${take}`;
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

const postMateruleComment = (ruleId, content) => {
  // CREATE_MATE_RULE_COMMENT: `/api/${VERSION}/${API_BASE.MATE}/rule/comment/:ruleId`,
  // 백엔드 API : /api/v1/rules/:ruleId/comments/:userId
  const url = `${API_URL.CREATE_MATE_RULE_COMMENT}/${ruleId}`;
  return axiosWithToken.post(url, {
    content: content,
  });
};

const getTeamRuleList = () => {
  // GET_TEAM_RULE_LIST: `/api/${VERSION}/${API_BASE.MATE}/rule/list/:userId`,
  // 백엔드 API : api/v1/mate/rule/list/:userId
  // const url = `${API_BASE.MATE}/rule/list/${userId}`;
  const url = `${API_URL.GET_TEAM_RULE_LIST}`;
  return axiosWithToken.get(url);
};

const deleteTeamRuleList = ruleId => {
  const url = `${API_URL.GET_TEAM_RULE_LIST}/${ruleId}`;

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
  getTeamMateRulePost,
  getTeamMateRuleComment,
  patchTeamMateRule,
  deleteTeamMate,
  postMateruleComment,
  getTeamRuleList,
  deleteTeamRuleList,
};
