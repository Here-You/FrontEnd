const BASE_PATH = {
  BASE: '/',
  SIGN_UP: '/signup',
  // LOGIN
  LOGIN: '/login',
  SNS_LOGIN_REDIRCT: '/login/oauth',
  ON_BOARDING: 'onboarding',
  // CALENDAR
  CALENDAR: '/calendar',
  // MAP
  MAP: '/map',
  MAP_DETAIL: '/map/:journeyId',
  // DAILYRECORD
  DAILY_RECORD: '/dailyrecord',
  DAILY_RECORD_LIST: '/dailyrecord/:journeyId',
  DAILY_RECORD_WRITE: '/dailyrecord/:scheduleId/write',
  DAILY_RECORD_EDIT: '/dailyrecord/:diaryId/edit',
  // SIGNATURE
  SIGNATURE: '/signature',
  SIGNATURE_WRITE: '/signature/write',
  SIGNATURE_EDIT: '/signature/edit/:signatureId',
  SIGNATURE_POST_PAGE: '/signature/post/:signatureId',
  // MATE
  MATE: '/mate',
  MATE_SEARCH: '/mate/search',
  MATE_LOOK: '/mate/look',
  MATE_MANAGEMENT: '/mate/management',
  MATE_RULE_WRITE: '/mate/rule-write',
  MATE_RULE_CHECK: '/mate/rule-check',
  MATE_RULE_DETAIL_CHECK: '/mate/rule-check/:ruleId',
  MATE_RULE_DETAIL_EDIT: '/mate/rule-edit/:ruleId',
  MATE_PROFILE_SEARCH: '/mate/:userId',
  // MY_PAGE
  MY_PAGE: '/mypage',
  MY_PAGE_EDIT: '/mypage/edit',
  TRAVEL_TYPE: '/traveltype',
  TRAVEL_TYPE_RESULT: '/traveltype/result',
  MY_DIARY: '/mydiary',
  //EXPLORE(탐색)
  EXPLORE: '/explore',
  // JOURNEY
  MAP_JOURNEY_DETAIL: '/map/journey/:journeyId',
  //notification
  NOTIFICATION_PAGE: '/notification',

  //newMain
  MAIN_PAGE: 'main',

  // profile
  PROFILE_PAGE: '/profile/:userId',
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
  PUBLIC_SCOPE: `/api/${VERSION}/${API_BASE.USER}/profile/visibility`,
  ADDITIONAL_INFORMATION: `/api/${VERSION}/${API_BASE.USER}/profile`,
  SNS_LOGIN: `/api/${VERSION}/${API_BASE.USER}/login/oauth`,
  UPDATE_NICKNAME: `/api/${VERSION}/${API_BASE.PROFILE}/nickname`,
  UPDATE_PROFILE_INTRO: `/api/${VERSION}/${API_BASE.PROFILE}/intro`,
  GET_ALL_DIARY: `/api/${VERSION}/${API_BASE.USER}/diaries`,

  NOTIFICATION: `/api/${VERSION}/${API_BASE.NOTIFICATION}`,
  WITHDRAW_MEMBER: `/api/${VERSION}/${API_BASE.PROFILE}/delete`,
  // HOME
  LOAD_MONTHLY_SCHEDULE: `/api/${VERSION}/${API_BASE.SCHEDULE}/monthly/:year/:month`,
  SAVE_JOURNEY: `/api/${VERSION}/${API_BASE.JOURNEY}/create/`,
  UPDATE_JOURNEY: `/api/${VERSION}/${API_BASE.JOURNEY}/update/:journeyId`,
  DELETE_JOURNEY: `/api/${VERSION}/${API_BASE.JOURNEY}/delete/:journeyId`,
  CREATE_SCHEDULE: `/api/${VERSION}/${API_BASE.SCHEDULE}/update-title/:scheduleId`,
  GET_SCHEDULE: `/api/${VERSION}/${API_BASE.SCHEDULE}/:journeyId`,
  DELETE_SCHEDULE: `/api/${VERSION}/${API_BASE.SCHEDULE}/delete/:scheduleId`,
  CREATE_DETAIL_SCHEDULE: `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/create/:scheduleId`,
  UPDATE_DETAIL_SCHEDULE: `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/update/:detailId`,
  CHANGE_DETAIL_SCHEDULE: `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/update-status/:detailId`,
  DELETE_DETAIL_SCHEDULE: `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/delete/:detailId`,
  CREATE_DIARY: `/api/${VERSION}/${API_BASE.DIARY}/create/:scheduleId`,
  GET_DIARY: `/api/${VERSION}/${API_BASE.DIARIES}/:diaryId`,
  UPDATE_DIARY: `/api/${VERSION}/${API_BASE.DIARIES}/update/:diaryId`,
  // MAP
  GET_MONTHLY_JOURNEY_MAP: `/api/${VERSION}/${API_BASE.MAP}/get-monthly-journey/:year/:month`,
  GET_JOURNEY_MAP: `/api/${VERSION}/${API_BASE.MAP}/get-journey/:journeyId`,
  GET_DIARIES_MAP: `/api/${VERSION}/${API_BASE.MAP}/get-diaries/:journeyId`,
  GET_DETAIL_JOURNEY_MAP: `/api/${VERSION}/${API_BASE.MAP}/get-schedules/:journeyId`,
  // SIGNATURE
  SEARCH_SIGNATURE: `/api/${VERSION}/${API_BASE.SEARCH}`, // 검색탭 메인화면
  GET_MY_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}`,
  PUBLISH_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}/new`,
  // 시그니처 수정, 삭제, 상세보기 (같은 URL)
  GET_DETAIL_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}/:signatureId`,
  //좋아요, 좋아요 취소,
  LIKE_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}/like/:signatureId`,
  //좋아요한 사용자 목록
  LIKELIST_SIGNATURE: `/api/${VERSION}/${API_BASE.SIGNATURE}/:signatureId/like`,

  // MATE
  SEARCH_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/detail/search`,
  FOLLOW_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow`,
  EXPLORE_RANDOM_MATE: `/api/${VERSION}/${API_BASE.MATE}/random`,
  LOCATION_MATE: `/api/${VERSION}/${API_BASE.MATE}/location`,
  GET_MATE_FOLLOW: `/api/${VERSION}/${API_BASE.MATE}/follow/followList`,
  GET_MATE_FOLLOWER: `/api/${VERSION}/${API_BASE.MATE}/follow/followerList`,
  CREATE_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/detail`,
  SEARCH_INVITE_MATE: `/api/${VERSION}/${API_BASE.MATE}/search`,
  SEARCH_NICKNAME_MATE: `/api/${VERSION}/${API_BASE.MATE}/follow/search`,
  GET_PARTICIPATE_TEAM_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/member/:ruleId`,
  GET_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/detail`,
  UPDATE_TEAM_MATE_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule/detail`,
  DELETE_TEAM_MATE: `/api/${VERSION}/${API_BASE.MATE}/rule/editMate/:ruleId/:mateId`,
  CREATE_MATE_RULE_COMMENT: `/api/${VERSION}/${API_BASE.MATE}/rule/detail/comment`,
  DELETE_MATE_RULE_COMMENT: `api/${VERSION}/${API_BASE.MATE}/rule/detail/comment`,
  GET_TEAM_RULE_LIST: `/api/${VERSION}/${API_BASE.MATE}/rule`,
  EXIT_TEAM_RULE: `/api/${VERSION}/${API_BASE.MATE}/rule`,
  MATE_PROFILE_SEARCH: `/api/${VERSION}/${API_BASE.MATE}`,
};

const API_PATH = {
  MY_PAGE_INFO: `${BASE_PATH.MY_PAGE}`,

  MATE_SEARCH: `${BASE_PATH.MATE_SEARCH}`,
  MATE_LOOK: `${BASE_PATH.MATE_LOOK}`,
  MATE_MANAGEMENT: `${BASE_PATH.MATE_MANAGEMENT}`,
  MATE_RULE_WRITE: `${BASE_PATH.MATE_RULE_WRITE}`,
  MATE_RULE_CHECK: `${BASE_PATH.MATE_RULE_CHECK}`,
  MATE_RULE_DETAIL_CHECK: `${BASE_PATH.MATE_RULE_DETAIL_CHECK}`,

  DAILY_RECORD_WRITE: `${BASE_PATH.DAILY_RECORD_WRITE}`,
  MONTHLY_SCHEDULE: `${BASE_PATH.BASE}`,
};

const KAKAO_REDIRECT_URL = ``;

export { BASE_PATH, VERSION, API_BASE, API_URL, API_PATH };
