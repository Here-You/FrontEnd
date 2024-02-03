import { useEffect, useState } from 'react';

import * as S from './IconSelectBox.style';

const IconSelectBox = ({ iconData, onClick, type, value }) => {
  const [selectdIcon, setSelectedIcon] = useState(false);
  const handleClick = iconName => {
    onClick(iconName, type);
    setSelectedIcon(iconName);
  };

  useEffect(() => {
    setSelectedIcon(value);
  }, []);

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
