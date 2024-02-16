import * as S from './MateRecsys.style';

const MateRecsysSkeleton = () => {
  return (
    <S.MateBox>
      <S.MateDescriptionBox>
        <S.TextBox>
          <S.MateImage />
          <S.TextContainer>
            <S.Text />
            <S.Text />
          </S.TextContainer>
          <S.ButtonContainer>
            <S.Button />
            <S.Button />
          </S.ButtonContainer>
        </S.TextBox>
      </S.MateDescriptionBox>
    </S.MateBox>
  );
};

export default MateRecsysSkeleton;
