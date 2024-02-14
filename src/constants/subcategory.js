import { myPageImg } from '/public/images/mypage/index';

const USER_SETTING = [
  {
    id: 0,
    img: myPageImg.User,
    title: '프로필 변경',
    link: '/mypage/edit',
    modal: false,
  },
  {
    id: 1,
    img: myPageImg.Book,
    title: '내 하루일지 확인하기',
    link: '/mydiary',
    modal: false,
  },
  {
    id: 2,
    img: myPageImg.Diamond,
    title: '내 시그니처 확인하기',
    link: '/signature',
    modal: false,
  },
  {
    id: 3,
    img: myPageImg.Lock,
    title: '공개범위 설정',
    link: null,
    modal: true,
  },
];

const SUPPORT = [
  {
    id: 0,
    img: myPageImg.Question,
    title: '자주 묻는 질문',
    link: 'https://www.notion.so/sally626/2364649c142d4ed6a65f8b8cc301a9a6?pvs=4',
    modal: false,
  },
  {
    id: 1,
    img: myPageImg.Bug,
    title: '버그 및 오류 제보',
    link: 'https://www.notion.so/sally626/c86010e2a9f448eea449f246115ee8a7?pvs=4',
    modal: false,
  },
  {
    id: 2,
    img: myPageImg.Chat,
    title: '의견 보내기',
    link: 'https://www.notion.so/sally626/49fc0dfff6904eb9817d320eb7e4769d?pvs=4',
    modal: false,
  },
];

const ETC = [
  {
    id: 0,
    img: myPageImg.Sertificate,
    title: '개발자 소개',
    link: 'https://www.notion.so/sally626/f566c3caed5747bb9a3fcfdc16b0857c?pvs=4',
    modal: false,
  },
  // {
  //   id: 1,
  //   img: myPageImg.File,
  //   title: '서비스 이용약관',
  // },
];

export { USER_SETTING, SUPPORT, ETC };
