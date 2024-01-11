import Slider from 'react-slick';
import styled, { css } from 'styled-components';

import { FONT_SIZE } from '../../constants/size';
import theme from '../../theme';

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  
  text-align: center;
  .slick-list {
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center; 
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-prev {
    left: 6px;
    z-index: 999;
  }
  .slick-next {
    right: 6px;
    z-index: 999;
  }
`;
const FirstOnBoardingImg = styled.img`
  margin: auto;
  margin-bottom: 50px;
  ${props =>
    props.id === 'image-0' &&
    css`
      height: 265px;
    `}
  ${props =>
    props.id === 'image-1' &&
    css`
      height: 268.8px;
    `}
    ${props =>
    props.id === 'image-2' &&
    css`
      height: 192px;
    `}
    ${props =>
    props.id === 'image-3' &&
    css`
      width: 268px;
      height: 221px;
    `}
`;

const NextButton = styled.button`
  background-color: #1b9c85;
  width: 319px;
  height: 74px;
  border-radius: 12px;
  padding: 0;

  color: #fffbfa;
  font-family: Nunito;
  font-weight: 900;
  font-size: 20px;
  margin-top: 80px;
`;
const SlickTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  font-family: Nunito;
  line-height: 32.74px;
  margin-bottom: 30px;
  text-align: center;
  color: #403B36;
`;
const SlickContent = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 20.8px;
  text-align: center;
  color: #595550;
`;
const CustomDot = styled.div`
  width: ${props => (props.active ? '10px' : '8px')};
  height: ${props => (props.active ? '10px' : '8px')};
  background-color: ${props => (props.active ? '#1B9C85' : '#1B9C8580')};
  border-radius: 20%;
  margin: 0 5px;
  pointer-events: none;
`;
const SlickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;

  text-align: center;
`;
const SlickContentBox = styled.div`
  width: 368px;
  margin: auto;
  padding-left: 10px;
  flex-direction: column;
  padding-right: 30px;
  display: flex;
  align-items: center;
  height: 108px;
  text-align: center;
 
  
`
const AccountAvailability = styled.div`
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 4%;
  font-family: Nunito;
`;


export { FirstOnBoardingImg, NextButton, StyledSlider, CustomDot, SlickTitle, SlickContent, SlickWrapper, SlickContentBox,AccountAvailability };