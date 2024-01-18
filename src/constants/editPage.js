import { myPageEditImg } from '/public/images/mypage/index';

const EDIT_CONTENTS_LIST = [
  {
    id: 0,
    title: '닉네임',
    content: '이유의 여행',
  },
  {
    id: 1,
    title: '이메일',
    content: 'Sally@naver.com',
  },
  {
    id: 2,
    title: '프로필 소개',
    content: '특기는 여행, 취미는 기록',
  },
];
const EDIT_SECOND_CONTENTS_LIST = [
  {
    id: 0,
    title: '닉네임 수정',
    img: myPageEditImg.RigthArrow,
    modal: 'INPUT_EDIT_MODAL',
    modalNum: 0,
  },
  {
    id: 1,
    title: '프로필 소개 수정',
    img: myPageEditImg.RigthArrow,
    modal: 'INPUT_EDIT_MODAL',
    modalNum: 1,
  },
  {
    id: 2,
    title: '프로필 사진 수정',
    img: myPageEditImg.RigthArrow,
    modal: 'INPUT_EDIT_MODAL',
    modalNum: 2,
  },
  {
    id: 3,
    title: '여행의 이유 회원 탈퇴',
    img: myPageEditImg.RigthArrow,
    modal: 'EDIT_MODAL',
    modalNum: 1,
  },
 
];

export { EDIT_CONTENTS_LIST, EDIT_SECOND_CONTENTS_LIST };
