import BoxSkeleton from './BoxSkeleton';
import HereyouBannerSkeleton from './HereyouBannerSkeleton';
import HotSignatureSkeleton from './HotSignatureSkeleton';
import LoginSkeleton from './LoginSkeleton';
import * as S from './MainSekeleton.style';
import MapSkeleton from '@/components/map/skeleton/MapSkeleton';

const MainSkeleton = () => {
  return (
    <S.Wrapper>
      <S.PageContainer>
        <LoginSkeleton />
        <MapSkeleton />
        <S.Container2>
          <BoxSkeleton />
          <BoxSkeleton />
        </S.Container2>
        <HereyouBannerSkeleton />
        <HotSignatureSkeleton />
      </S.PageContainer>
    </S.Wrapper>
  );
};

export default MainSkeleton;
