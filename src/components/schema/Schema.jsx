import * as yup from 'yup';

const Schema = yup.object().shape({
  nickname: yup
    .string()
    .min(2, '닉네임은 최소 2글자 이상입니다!')
    .max(10, '닉네임은 최대 10글자입니다!'),
  // checkNickname: yup.boolean().required('중복체크해주세요'),
  introduction: yup
    .string()
    .min(3, '3자 이상 입력해주세요!')
    .max(20, '프로필 소개는 최대 20글자입니다!'),
});

export default Schema;
