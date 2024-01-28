import { useNavigate } from 'react-router-dom';

import * as S from './BottomTravelList.style';
import Location from '/icons/Location.svg';

const BottomTravelList = ({ id, title, count }) => {
  const navigate = useNavigate();
  return (
    <S.ListContainer>
      <S.ListWrapper onClick={() => navigate(`/map/${id}`)}>
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
