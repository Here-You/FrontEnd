import { myPageEditImg } from '/public/images/mypage/index';

const EDIT_CONTENTS_LIST = [
  {
    id: 0,
    title: '닉네임',
    content: 'nickname',
  },
  {
    id: 1,
    title: '이메일',
    content: 'email',
  },
  {
    id: 2,
    title: '프로필 소개',
    content: 'introduction',
  },
];
const EDIT_SECOND_CONTENTS_LIST = [
  {
    id: 0,
    title: '닉네임 수정',
    img: myPageEditImg.RightArrow,
    modal: 'INPUT_EDIT_MODAL',
    modalNum: 0,
  },
  {
    id: 1,
    title: '프로필 소개 수정',
    img: myPageEditImg.RightArrow,
    modal: 'INPUT_EDIT_MODAL',
    modalNum: 1,
  },
  {
    id: 2,
    title: '여행의 이유 회원 탈퇴',
    img: myPageEditImg.RightArrow,
    modal: 'EDIT_MODAL',
    modalNum: 1,
  },
];

export { EDIT_CONTENTS_LIST, EDIT_SECOND_CONTENTS_LIST };
