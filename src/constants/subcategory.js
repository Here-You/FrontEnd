import { myPageImg } from '/public/images/mypage/index';

const USER_SETTING = [
  {
    id: 0,
    img: myPageImg.User,
    title: '프로필 변경',
    get link() {
      return localStorage.getItem('x-access-token') ? '/mypage/edit' : null;
    },
  },
  {
    id: 1,
    img: myPageImg.Sign_out_squre,
    get link() {
      return !localStorage.getItem('x-access-token') ? '/login' : null;
    },
    get modal() {
      return localStorage.getItem('x-access-token') ? true : false;
    },
  },
  {
    id: 2,
    img: myPageImg.Book,
    title: '내 하루일지 확인하기',
    get link() {
      return localStorage.getItem('x-access-token') ? '/mydiary' : null;
    },
  },
  {
    id: 3,
    img: myPageImg.Diamond,
    title: '내 시그니처 확인하기',
    get link() {
      return localStorage.getItem('x-access-token') ? '/signature' : null;
    },
  },
  {
    id: 4,
    img: myPageImg.Lock,
    title: '공개범위 설정',
    get modal() {
      return localStorage.getItem('x-access-token') ? true : false;
    },
  },
];

const SUPPORT = [
  {
    id: 0,
    img: myPageImg.Question,
    title: '자주 묻는 질문',
    notion: true,
  },
  {
    id: 1,
    img: myPageImg.Bug,
    title: '버그 및 오류 제보',
    notion: true,
  },
  {
    id: 2,
    img: myPageImg.Chat,
    title: '의견 보내기',
    notion: true,
  },
];

const ETC = [
  {
    id: 0,
    img: myPageImg.Sertificate,
    title: '개발자 소개',
    notion: true,
  },
  // {
  //   id: 1,
  //   img: myPageImg.File,
  //   title: '서비스 이용약관',
  // },
];

export { USER_SETTING, SUPPORT, ETC };
