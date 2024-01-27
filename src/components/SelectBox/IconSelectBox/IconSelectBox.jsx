import * as S from './IconSelectBox.style';

const IconSelectBox = ({ iconData }) => {
  return (
    <S.Container>
      {iconData.map(({ id, iconUrl, iconName }) => (
        <S.IconButtonContainer key={id}>
          <S.IconImage src={iconUrl} />
        </S.IconButtonContainer>
      ))}
    </S.Container>
  );
};

export default IconSelectBox;
