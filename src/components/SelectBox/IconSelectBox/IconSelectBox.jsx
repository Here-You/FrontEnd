import { useState } from 'react';

import * as S from './IconSelectBox.style';

const IconSelectBox = ({ iconData, onClick, type }) => {
  const [selectdIcon, setSelectedIcon] = useState(false);
  const handleClick = iconName => {
    onClick(iconName, type);
    setSelectedIcon(iconName);
  };

  return (
    <S.Container>
      {iconData.map(({ id, iconUrl, iconName }) => (
        <S.IconButtonContainer
          key={id}
          onClick={() => handleClick(iconName)}
          $selectdIcon={selectdIcon === iconName}>
          <S.IconImage src={iconUrl} />
        </S.IconButtonContainer>
      ))}
    </S.Container>
  );
};

export default IconSelectBox;
