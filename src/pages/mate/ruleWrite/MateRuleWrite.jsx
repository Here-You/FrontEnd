import * as S from './MateRuleWrite.style';
import PlusUser from '/images/mate/add-user.svg';

const MateRuleWritePage = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <h1>제주여행을 떠나면</h1>
          <img src={PlusUser} />
        </S.Header>
        <S.Content>
          <S.TitleInput placeholder="1. 규칙 1을 입력해주세요!" />
          <S.TextInput
            placeholder="1. 규칙 1 내용을 입력해주세요!"
            rows="5"
            columns="2"
          />
        </S.Content>
      </S.Wrapper>
      <S.SubmitBtn>발행하기</S.SubmitBtn>
    </S.Container>
  );
};

export default MateRuleWritePage;
