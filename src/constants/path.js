const BASE_PATH = {
  BASE: '/',
  TRAVELS: '/travels',
  SIGN_UP: '/signup',
  LOGIN: '/login',
  ON_BOARDING: 'onboarding',
  MAP: '/map',
  // DAILYRECORD
  DAILY_RECORD: '/dailyrecord',
  DAILY_RECORD_WRITE: '/dailyrecord/write/:scheduleid',
  DAILY_RECORD_EDIT: '/dailyrecord/edit/:scheduleid/:recordid',
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
};

const KAKAO_REDIRECT_URL = ``;

export { BASE_PATH, API_PATH };
