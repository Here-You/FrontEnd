import * as S from './MateLook.style';
import mateSearchIcon from '/images/mate_search.svg';
import MateSignature from '@/components/mate/MateSignature';
import MateSignaturePreview from '@/components/mate/MateSignaturePreview';

const MateLookPage = () => {
  return (
    <>
      <S.CenteredContainer>
        <S.FixedContainer>
          <S.StyledTitle>메이트 탐색하기</S.StyledTitle>
          <S.StyledDes>
            운명적인 여행 메이트, 어디없을까? <br />
            시그니처 태그를 통해 운명의 여행 메이트를 <br />
            탐색해보세요
          </S.StyledDes>
          <S.StyledIcon src={mateSearchIcon}></S.StyledIcon>
        </S.FixedContainer>

        <S.ContentsContainer>
          <MateSignature text="샐리님이 사용한 위치 [#오사카]를 함께 이용 중인 메이트" />
          <MateSignaturePreview />
        </S.ContentsContainer>

        <S.ContentsContainer>
          <MateSignature text="샐리님의 메이트가 작성한 시그니처" />
          <MateSignaturePreview />
        </S.ContentsContainer>
      </S.CenteredContainer>
    </>
  );
};

export default MateLookPage;
