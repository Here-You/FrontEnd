import { useLocation } from 'react-router-dom';

import * as S from './Footer.style';
import Group from '/images/Group.svg';
import Home from '/images/Home.svg';
import Search from '/images/Search.svg';
import Calendar2 from '/images/calendar2.svg';
import Calendar from '/images/calendarIcon.svg';
import Search2 from '/images/explore2.svg';
import Globe from '/images/footerSignature.svg';
import Home2 from '/images/home2.svg';
import Group2 from '/images/mate2.svg';
import Globe2 from '/images/signature2.svg';

const FooterMenu = [
  { icon1: Calendar, icon2: Calendar2, name: '일정', to: '/calendar' },
  { icon1: Search, icon2: Search2, name: '탐색', to: '/explore' },
  { icon1: Home, icon2: Home2, name: '홈', to: '/' },
  { icon1: Globe, icon2: Globe2, name: '시그니처', to: '/signature' },
  { icon1: Group, icon2: Group2, name: '메이트', to: '/mate' },
];

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <S.FooterWrapper>
      {FooterMenu.map((f, index) => (
        <S.LinkTo key={index} to={f.to} active={pathname === f.to}>
          <S.Image
            src={pathname === f.to ? f.icon2 : f.icon1}
            color={pathname === f.to ? 'green' : 'black'}
          />
          <p>{f.name}</p>
        </S.LinkTo>
      ))}
    </S.FooterWrapper>
  );
};

export default Footer;
