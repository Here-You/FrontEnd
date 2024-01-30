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
    modalTitle: '변경할 닉네임을 입력해 주세요',
    button_text: '닉네임 변경',
    input_type: 'nickname',
  },
  {
    id: 1,
    title: '프로필 소개 수정',
    img: myPageEditImg.RigthArrow,
    modalTitle: '변경할 프로필 소개 내용을 입력해 주세요.',
    button_text: '프로필 소개 변경',
    input_type: 'intro',
  },
  {
    id: 2,
    title: '여행의 이유 회원 탈퇴',
    img: myPageEditImg.RigthArrow,
  },
];

export { EDIT_CONTENTS_LIST, EDIT_SECOND_CONTENTS_LIST };
