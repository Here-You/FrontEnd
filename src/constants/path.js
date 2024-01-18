const BASE_PATH = {
  BASE: '/',
  TRAVELS: '/travels',
  SIGN_UP: '/signup',
  LOGIN: '/login',
  ON_BOARDING: 'onboarding',
  SCHEDULE: '/schedule',
  // DAILYRECORD
  DAILYRECORD: '/dailyrecord',
  DAILYRECORD_WRITE: '/dailyrecord/write/:scheduleid',
  DAILYRECORD_EDIT: '/dailyrecord/edit/:scheduleid/:recordid',
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
  MATE_HOME: '/mate/:userId',
  MATE_RULE_CHECK_PAGE: '/mate/rule-check/:teamId',
  // MATE_MY_RULE: '/mate/rule/mine',
  // MATE_WRITE_RULE: '/mate/rule/mine/edit',
  // MATE_OURS_RULE: '/mate/rule/ours',
  // MATE_OURS_RULE_EDIT: '/mate/rule/ours/edit',
  // MATE_RULE_TEMPLATE: '/mate/rule/template',
  // MY_PAGE
  MY_PAGE: '/mypage',
  MY_PAGE_EDIT: '/mypage/edit',
  MY_PAGE_CHANGE_PASSWORD: '/mypage/password',
  MY_PAGE_WITHDRAW: '/mypage/withdraw',
  // App.jsx에서, path 추가할때 사용하시면 됩니다. 예시코드 9번줄
};

const API_PATH = {
  FAVORITE_TRAVELS: `${BASE_PATH.TRAVELS}/favorite`,
  MATE_SEARCH: `${BASE_PATH.MATE_SEARCH}`,
  MATE_LOOK: `${BASE_PATH.MATE_LOOK}`,
  MATE_MANAGEMENT: `${BASE_PATH.MATE_MANAGEMENT}`,
  DAILYRECORD_WRITE: `${BASE_PATH.DAILYRECORD_WRITE}`,
};

const KAKAO_REDIRECT_URL = ``;

export { BASE_PATH, API_PATH };
