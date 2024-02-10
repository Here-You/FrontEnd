import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 3%;
  cursor: pointer;
`;

const PreviewImg = styled(LazyLoadImage)`
  display: flex;
  width: 140px;
  height: 140px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid var(--gray2, #c8c8c8);
`;

const Title = styled.div`
  display: flex;
  font-family: Pretendard-bold;
  font-size: 12px;
  margin: 3px 0px;
`;

const Profile = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 5px;
  justify-content: flex-start;
`;

const ProfileImg = styled(LazyLoadImage)`
  display: flex;
  width: 25px;
  height: 25px;

  border-radius: 50%;
  object-fit: cover;
`;

const Nickname = styled.div`
  font-size: ${FONT_SIZE.XS};
`;

const Date = styled.div`
  display: flex;
  width: 70%;
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const HeartContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 2px;
`;

const Open = styled.div`
  display: flex;
  font-size: 12px;

  cursor: pointer;
`;

const Info = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: flex-start;
  font-size: 10px;
  margin-top: 5px;
`;

export {
  PreviewWrap,
  Profile,
  ProfileImg,
  Date,
  PreviewImg,
  Title,
  Open,
  Nickname,
  Info,
  HeartContainer,
};
