import * as yup from 'yup';

const SignUpSchema = yup.object().shape({
  nickname: yup
    .string()
    .min(2, '닉네임은 최소 2글자 이상입니다!')
    .max(10, '닉네임은 최대 10글자입니다!')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      '닉네임에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!',
    )
    .required('닉네임을 입력해주세요'),
  // checkNickname: yup.boolean().required('중복체크해주세요'),
  introduction: yup
    .string()
    .min(3, '3자 이상 입력해주세요!')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      '닉네임에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!',
    )
    .required('아이디를 입력해주세요'),
});

export default SignUpSchema;
