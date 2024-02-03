import * as S from './Navbar.style';
import Bell from '/images/Bell.svg';
import User from '/images/User.svg';
import main from '/images/main.svg';

const Navbar = () => {
  return (
    <S.NavWrapper>
      <S.LinkTo to="/mypage">
        <S.Image src={User} />
      </S.LinkTo>
      <S.LinkTo to="/">
        <S.Image src={main} />
      </S.LinkTo>
      <S.LinkTo to="/notification">
        <S.Image src={Bell}  />
      </S.LinkTo>
    </S.NavWrapper>
  );
};

export default Navbar;
