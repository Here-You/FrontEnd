import * as S from './BottomTravelList.style';
import Location from '/icons/Location.svg';

const BottomTravelList = ({ title, count }) => {
  return (
    <S.ListContainer>
      <S.ListWrapper>
        <S.MarkImage src={Location} />
        <S.ListDescriptionContainer>
          <h2>{title}</h2>
          <S.TextContainer>
            <p>작성 일지 {count}개</p>
            {/* <date>
              {startDate}~{endDate}
            </date> */}
          </S.TextContainer>
        </S.ListDescriptionContainer>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

export default BottomTravelList;
