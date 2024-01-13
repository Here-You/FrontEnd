import { useState } from 'react';

import * as S from './Journey.style';
import DetailPlan from './detail/DetailPlan';
import Group from '/icons/Group.svg';

const Journey = ({ data, dataLength }) => {
  const { id, title, date, group, detail } = data;
  const [isToggle, setIsToggle] = useState(false);
  const lastPlan = id === dataLength ? true : false;

  const handleOnToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <S.Container>
      <S.MainContainer onClick={handleOnToggle}>
        <S.RowContainer>
          <S.Title>{title}</S.Title>
          <S.Date>{date}</S.Date>
        </S.RowContainer>
        <S.RowContainer>
          <S.Mate>
            <S.Image src={Group} />
            {group}
          </S.Mate>
        </S.RowContainer>
      </S.MainContainer>

      {dataLength > 1 && dataLength !== id && (
        <S.ShortLine $isToggle={isToggle} />
      )}

      <DetailPlan
        isToggle={isToggle}
        detailData={detail}
        dataLength={dataLength}
        lastPlan={lastPlan}
      />
    </S.Container>
  );
};

export default Journey;
