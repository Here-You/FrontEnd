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

const postFollowMate = followId => {
  // FOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow/:followId`,
  // 백엔드 API : api/v1/mate/follow/:followId
  const url = `${API_URL.FOLLOW_MATE}/${followId}`;
  return axiosWithToken.patch(url);
};

const getExploreMate = (take, { pageParam }) => {
  // EXPLORE_MATE: `/api/${VERSION}/${API_BASE.MATE}/explore/:userId`,
  // 백엔드 API : api/v1/mate/random?take=3&cursorId=3
  const url = `${API_URL.EXPLORE_RANDOM_MATE}/?take=${take}&cursorId=${pageParam}`;

  return axiosWithToken.get(url);
};

const getLocationMate = () => {
  const url = `${API_URL.LOCATION_MATE}`;

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
  const url = `${API_URL.GET_MATE_FOLLOW}`;
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
const getTeamMateRuleComment = (ruleId, take, { pageParam }) => {
  const url = `${API_URL.GET_TEAM_MATE_RULE}/comment/${ruleId}?take=${take}&cursorId=${pageParam}&sort`;
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

const postMateRuleComment = ({ ruleId, content }) => {
  // CREATE_MATE_RULE_COMMENT: `/api/${VERSION}/${API_BASE.MATE}/rule/comment/:ruleId`,
  // 백엔드 API : /api/v1/rules/:ruleId/comments/:userId
  const url = `${API_URL.CREATE_MATE_RULE_COMMENT}/${ruleId}`;
  return axiosWithToken.post(url, {
    content: content,
  });
};

const deleteMateRuleComment = ({ ruleId, id }) => {
  const url = `${API_URL.DELETE_MATE_RULE_COMMENT}/${ruleId}/${id}`;
  console.log(url);
  return axiosWithToken.delete(url);
};

const updateMateRuleComment = ({ ruleId, id, content }) => {
  const url = `${API_URL.DELETE_MATE_RULE_COMMENT}/${ruleId}/${id}`;
  console.log(url, content);
  return axiosWithToken.patch(url, {
    content: content,
  });
};

const getTeamRuleList = () => {
  // GET_TEAM_RULE_LIST: `/api/${VERSION}/${API_BASE.MATE}/rule/list`,
  // 백엔드 API : api/v1/mate/rule/list
  // const url = `${API_BASE.MATE}/rule/list`;
  const url = `${API_URL.GET_TEAM_RULE_LIST}`;
  return axiosWithToken.get(url);
};

const deleteTeamRuleList = ruleId => {
  const url = `${API_URL.EXIT_TEAM_RULE}/${ruleId}`;

  return axiosWithToken.delete(url);
};

const getMateProfile = userId => {
  const url = `${API_URL.MATE_PROFILE_SEARCH}/${userId}`;
  return axiosWithToken.get(url);
};

const getMateInfiniteSignatureList = (mateId, take, { pageParam }) => {
  const url = `api/v1/mate/signature/${mateId}?take=${take}&cursorId=${pageParam}`;

  return axiosWithToken.get(url);
};

const updateTeamMateRule = (ruleId, { postDataWithId }) => {
  const url = `${API_URL.UPDATE_TEAM_MATE_RULE}/${ruleId}`;
  console.log(postDataWithId);
  return axiosWithToken.patch(url, postDataWithId);
};

export {
  getSearchMate,
  postFollowMate,
  getExploreMate,
  getMateFollower,
  getMateFollowing,
  postCreateMateRule,
  getSearchInviteMate,
  getParticipateTeamMate,
  getTeamMateRulePost,
  getTeamMateRuleComment,
  patchTeamMateRule,
  getLocationMate,
  deleteTeamMate,
  postMateRuleComment,
  getTeamRuleList,
  deleteTeamRuleList,
  updateMateRuleComment,
  deleteMateRuleComment,
  getMateProfile,
  getMateInfiniteSignatureList,
  updateTeamMateRule,
};
