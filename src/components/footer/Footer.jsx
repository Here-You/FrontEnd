import { useLocation } from 'react-router-dom';

import * as S from './Footer.style';
import Group from '/images/Group.svg';
import Home from '/images/Home.svg';
import Search from '/images/Search.svg';
import Globe from '/images/footerSignature.svg';

const FooterMenu = [
  { icon: Home, name: '홈', to: '/' },
  { icon: Search, name: '탐색', to: '/explore' },
  { icon: Globe, name: '시그니처', to: '/signature' },
  { icon: Group, name: '메이트', to: '/mate' },
];

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <S.FooterWrapper>
      {FooterMenu.map((f, index) => (
        <S.LinkTo key={index} to={f.to} active={pathname === f.to}>
          <S.Image src={f.icon} color={pathname === f.to ? 'green' : 'black'} />
          <p>{f.name}</p>
        </S.LinkTo>
      ))}
    </S.FooterWrapper>
  );
};

export default Footer;
