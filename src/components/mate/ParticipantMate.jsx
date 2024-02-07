import * as S from './ParticipantMate.style';

const ParticipantMate = ({ profileData, onClick }) => {
  const { image, name, nickname, bio } = profileData;

  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  //   onClick(profileData, !isActive);
  // };
  // const handleClick = () => {
  //   onClick(profileData);
  // };

  return (
    // <S.ResultContainer isActive={isActive} onClick={handleClick}>
    <S.ResultContainer>
      <S.UserImg src={image} alt="프로필" />
      <S.TextContainer>
        <p>{name}</p>
        <p>{nickname}</p>
        <p>{bio}</p>
      </S.TextContainer>
    </S.ResultContainer>
  );
};

export default ParticipantMate;
