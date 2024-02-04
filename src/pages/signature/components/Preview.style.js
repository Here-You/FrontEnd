import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 140px;
  margin: 3%;
  cursor: pointer;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const ProfileImg = styled.img`
  display: flex;
  max-width: 30px;
  max-height: 30px;
  border-radius: 100%;
`;
const Date = styled.div`
  display: flex;
  width: 70%;
  margin-left: 5px;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const PreviewImg = styled.img`
  display: flex;
  max-width: 150px;
  max-height: 150px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid var(--gray2, #c8c8c8);
`;
const Title = styled.div`
  display: flex;
  font-family: Pretendard-bold;
  color: var(--black, #393939);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 3px 0px;
`;
const Open = styled(Link)`
  display: flex;
  font-size: 12px;
  cursor: pointer;
`;

export { PreviewImg, ProfileImg, Profile, PreviewWrap, Date, Title, Open };
