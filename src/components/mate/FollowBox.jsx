import * as S from './Profile.style';

const FollowBox = ({ text, num }) => {
  return (
    <S.FollowData>
      <S.UserFollow>{text}</S.UserFollow>
      <S.UserFollowNumber>{num}</S.UserFollowNumber>
    </S.FollowData>
  );
};

export default FollowBox;
