import * as S from './MateLook.style';
import Banner from '@/components/mate/Banner';
import MateSignatureSection from '@/components/mate/MateSignatureSection';
import { useExploreMate } from '@/hooks/mate/useExploreMate';

const MateLookPage = () => {
  const { data, loading, error } = useExploreMate();

  return (
    <S.MateLookContainer>
      <Banner />
      <S.CenteredContainer>
        <MateSignatureSection data={data} />
      </S.CenteredContainer>
    </S.MateLookContainer>
  );
};

export default MateLookPage;
