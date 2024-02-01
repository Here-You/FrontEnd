const BASE_PATH = {
  BASE: '/',
  TRAVELS: '/travels',
  SIGN_UP: '/signup',
  LOGIN: '/login',
  ON_BOARDING: 'onboarding',
  MAP: '/map',
  MAP_DETAIL: '/map/:journeyId',
  // DAILYRECORD
  DAILY_RECORD: '/dailyrecord/:scheduleid',
  DAILY_RECORD_WRITE: '/dailyrecord/:scheduleid/write',
  DAILY_RECORD_EDIT: '/dailyrecord/:scheduleid/edit/:recordid',
  // SIGNATURE
  SIGNATURE: '/signature',
  SIGNATURE_WRITE: '/signature/write',
  SIGNATURE_SEARCH: '/signature/search',
  SIGNATURE_EDIT: '/signature/edit',
  SIGNATURE_POPULAR: '/signature/popular',
  SIGNATURE_RECOMMEND: '/signature/recommend/:tag',
  SIGNATURE_POST_PAGE: '/signature/:userId/:title',
  // MATE
  MATE: '/mate',
  MATE_SEARCH: '/mate/search',
  MATE_LOOK: '/mate/look',
  MATE_MANAGEMENT: '/mate/management',
  MATE_RULE_WRITE: '/mate/rule-write',
  MATE_RULE_CHECK: '/mate/rule-check',
  MATE_RULE_DETAIL_CHECK: '/mate/rule-check/:ruleId',
  // MY_PAGE
  MY_PAGE: '/mypage',
  MY_PAGE_EDIT: '/mypage/edit',
  MY_PAGE_CHANGE_PASSWORD: '/mypage/password',
  MY_PAGE_WITHDRAW: '/mypage/withdraw',
  // App.jsx에서, path 추가할때 사용하시면 됩니다. 예시코드 9번줄
  TRAVEL_TYPE: '/traveltype',
  TRAVEL_TYPE_RESULT: '/traveltype/result',
  //EXPLORE(탐색)
  EXPLORE: '/explore',
  EXPLORE_SEARCH: '/explore/:value',
  // JOURNEY
  MAP_JOURNEY_DETAIL: '/map/journey/:journeyId',
};

const VERSION = 'v1';

const API_BASE = {
  USER: 'user',
  PROFILE: 'profile',
  NOTIFICATION: 'notification',
  SCHEDULE: 'schedule',
  SCHEDULES: 'schedules',
  DETAIL_SCHEDULE: 'detail-schedule',
  JOURNEY: 'journey',
  DIARY: 'diary',
  DIARIES: 'diaries',
  MAP: 'map',
  SEARCH: 'search',
  SIGNATURE: 'signature',
  MATE: 'mate',
};

const API_URL = {
  // PROFILE
  LOGIN: `/api/${VERSION}/${API_BASE.USER}/login`,
  SNS_LOGIN: `/api/${VERSION}/${API_BASE.USER}/login/oauth`,
  UPDATE_NICKNAME: `/api/${VERSION}/${API_BASE.PROFILE}/nickname`,
  UPDATE_PROFILE_INTRO: `/api/${VERSION}/${API_BASE.PROFILE}/intro`,
  NOTIFICATION: `/api/${VERSION}/${API_BASE.NOTIFICATION}`,
  WITHDRAW_MEMBER: `/api/${VERSION}/${API_BASE.PROFILE}/delete`,
  // HOME
  LOAD_MONTHLY_SCHEDULE: `/api/${VERSION}/${API_BASE.SCHEDULES}/monthly`,
  SAVE_JOURNEY: `/api/${VERSION}/${API_BASE.JOURNEY}/create`,
  UPDATE_JOURNEY: `/api/${VERSION}/${API_BASE.JOURNEY}/update/:journeyId`,
  DELETE_JOURNEY: `/api/${VERSION}/${API_BASE.JOURNEY}/delete/:journeyId`,
  CREATE_SCHEDULE: `/api/${VERSION}/${API_BASE.SCHEDULE}/create`,
  GET_SCHEDULE: `/api/${VERSION}/${API_BASE.SCHEDULES}/:journeyId`,
  CREATE_DETAIL_SCHEDULE: `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/:scheduleId`,
  UPDATE_DETAIL_SCHEDULE: `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/:scheduleId/update/:detailId`,
  DELETE_DETAIL_SCHEDULE: `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/:scheduleId/delete/:detailId`,
  CREATE_DIARY: `/api/${VERSION}/${API_BASE.DIARY}/create/:scheduleId`,
  GET_DIARY: `/api/${VERSION}/${API_BASE.DIARIES}/:scheduleId`,
  // MAP
  GET_MONTHLY_JOURNEY_MAP: `/api/${VERSION}/${API_BASE.MAP}/monthly-journey`,
  GET_JOURNEY_MAP: `/api/${VERSION}/${API_BASE.MAP}/journey/get`,
  GET_DIARIES_MAP: `/api/${VERSION}/${API_BASE.MAP}/diaries/get/:journeyId`,
  GET_DETAIL_JOURNEY_MAP: `/api/${VERSION}/${API_BASE.MAP}/schedules/get/:journeyId`,
  // SIGNATURE
  SEARCH_SIGNATURE: `/api/${VERSION}/${API_BASE.SEARCH}`, // 검색탭 메인화면
  GET_MY_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}`,
  SETTING_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}/:signatureId`,
  UPLOAD_SIGNATURE_IMAGE: `/api/${VERSION}/${API_BASE.SIGNATURE}/image`,
  PUBLISH_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}/new`,
  // 시그니처 수정, 삭제, 상세보기 (같은 URL)
  GET_DETAIL_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}/:signatureId`,
  // 좋아요, 좋아요 취소, 좋아요한 사용자 목록
  LIKE_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}/:signatureId/like`,
  // MATE
  SEARCH_MATE: `/api/${VERSION}/${API_BASE.MATE}/search`,
  FOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow/:userId`,
  UNFOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow/:userId`,
  EXPLORE_MATE: `/api/${VERSION}/${API_BASE.MATE}/explore/:userId`,
  GET_MATE_FOLLOWER: `/api/${VERSION}/${API_BASE.MATE}/followList/:userId`,
  GET_MATE_FOLLOWING: `/api/${VERSION}/${API_BASE.MATE}/followingList/:userId`,
  CREATE_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/write`,
  SEARCH_INVITE_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/searchMate`,
  GET_PARTICIPATE_TEAM_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/participants/:ruleId`,
  GET_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/view/:ruleId`,
  UPDATE_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/edit/:ruleId`,
  DELETE_TEAM_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/editMate/:ruleId/:userId`,
  CREATE_MATE_RULE_COMMENT: `/api/${VERSION}/${API_BASE.MATE}/rule/comment/:ruleId`,
  GET_TEAM_RULE_LIST: `/api/${VERSION}/${API_BASE.MATE}/rule/list/:userId`,
};

const API_PATH = {
  FAVORITE_TRAVELS: `${BASE_PATH.TRAVELS}/favorite`,
  SIGNATURE_PREVIEW: `${BASE_PATH.SIGNATURE}/preview`,
  MY_PAGE_INFO: `${BASE_PATH.MY_PAGE}`,

  MATE_SEARCH: `${BASE_PATH.MATE_SEARCH}`,
  MATE_LOOK: `${BASE_PATH.MATE_LOOK}`,
  MATE_MANAGEMENT: `${BASE_PATH.MATE_MANAGEMENT}`,
  MATE_RULE_WRITE: `${BASE_PATH.MATE_RULE_WRITE}`,
  MATE_RULE_INVITE: `${BASE_PATH.MATE_RULE_WRITE}/invite`,
  MATE_RULE_CHECK: `${BASE_PATH.MATE_RULE_CHECK}`,
  MATE_RULE_DETAIL_CHECK: `${BASE_PATH.MATE_RULE_DETAIL_CHECK}`,

  DAILY_RECORD_WRITE: `${BASE_PATH.DAILY_RECORD_WRITE}`,
  SIGNATURE_PREVIEW: `${BASE_PATH.SIGNATURE}/preview`,
  MONTHLY_SCHEDULE: `${BASE_PATH.BASE}`,
};

const KAKAO_REDIRECT_URL = ``;

export { BASE_PATH, VERSION, API_BASE, API_URL, API_PATH };
