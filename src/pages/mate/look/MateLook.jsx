import * as S from './MateLook.style';
import mateSearchIcon from '/images/mate/mate_search.svg';
import Banner from '@/components/mate/Banner';
import MateSignatureSection from '@/components/mate/MateSignatureSection';
import { useMateLook } from '@/hooks/mate/useMate';

const MateLookPage = () => {
  const { data: matesData, loading, error } = useMateLook();

  return (
    <S.MateLookContainer>
      <Banner />
      <S.CenteredContainer>
        {loading ? (
          <div>로딩중입니다.</div>
        ) : (
          <>
            <MateSignatureSection
              text="샐리님이 사용한 위치 [#오사카]를 함께 이용 중인 메이트"
              matesData={matesData}
            />
            <MateSignatureSection
              text="샐리님의 메이트가 작성한 시그니처"
              matesData={matesData}
            />
          </>
        )}
      </S.CenteredContainer>
    </S.MateLookContainer>
  );
};

export default MateLookPage;
