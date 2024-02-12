import * as S from './BannerDiary.style';
import space from '/images/spacelogo.svg';

const BannerDiary = () => {
  const contentData = [
    '[여행의 이유]는 여행을 통해 자아를 발견하고, 성장을 이루는 특별한 경험을 제공합니다.',
    '우리의 서비스 컨셉 속 우주는 무한한 가능성을 상징하며',
    '각각의 행성은 여행자가 여정과 이야기를 통해 창조한 자신만의 수많은 세계들을 담고 있습니다.',
    '당신이 꿈꾸던 완벽한 여행은 여기에서 시작됩니다.',
  ];

  return (
    <S.BannerContainer>
      <S.ButtonContainer>
        <img src={space} />
        <S.Button>하루일지란?</S.Button>
      </S.ButtonContainer>
      <S.ContentContainer>
        <S.Content>{contentData[0]}</S.Content>
        <S.Content>{contentData[1]}</S.Content>
        <S.Content>{contentData[2]}</S.Content>
        <S.Content>{contentData[3]}</S.Content>
      </S.ContentContainer>
    </S.BannerContainer>
  );
};

export default BannerDiary;
