import Slider from 'react-slick';
import styled, { css } from 'styled-components';

import { FONT_SIZE } from '../../constants/size';
import theme from '../../theme';

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;

  cursor: default;
  .slick-list {
    height: 100%;
    object-fit: cover;
    ${theme.ALIGN.ROW_CENTER};
  }
  .slick-track {
    ${theme.ALIGN.ROW_CENTER};
  }
  .slick-prev {
    left: 6px;
    z-index: 999;
  }
  .slick-next {
    right: 6px;
    z-index: 999;
  }
  .slick-dots li {
    cursor: default;
    margin: 0;
  }
`;

const OnBoardingImg = styled.img`
  margin: auto;
  position: relative;
  bottom: 20px;

  ${props =>
    props.id === 'image-0' &&
    css`
      height: 265px;
      margin-bottom: 3.3px;
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
      bottom: 0px;
      margin-bottom: 76.8px;
    `}
    ${props =>
    props.id === 'image-3' &&
    css`
      width: 268px;
      height: 221px;
      margin-bottom: 47.8px;
    `}

   @media ${theme.WINDOW_SIZE.MOBILE} {
    ${props =>
      props.id === 'image-0' &&
      css`
        height: 200px;
        margin-bottom: 3.3px;
      `}
    ${props =>
      props.id === 'image-1' &&
      css`
        height: 203.3px;
      `}
    ${props =>
      props.id === 'image-2' &&
      css`
        height: 127px;
        bottom: 0px;
        margin-bottom: 76.8px;
      `}
    /* ${props =>
      props.id === 'image-3' &&
      css`
        width: 203px;
        height: 1px;
        margin-bottom: 47.8px;
      `} */
  }
`;

const NextButton = styled.button`
  background-color: #1b9c85;
  width: 70%;
  height: 110px;
  border-radius: 12px;
  letter-spacing: 0.1rem;
  color: #fffbfa;
  border: none;
  font-weight: 900;
  font-size: ${FONT_SIZE.XL};
  margin-top: 80px;
  outline: none;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
    height: 90px;
  }
`;

const CustomDot = styled.div`
  width: ${props => (props.active ? '10px' : '8px')};
  height: ${props => (props.active ? '10px' : '8px')};
  background-color: ${props => (props.active ? '#1B9C85' : '#1B9C8580')};
  border-radius: 30%;
  pointer-events: none;
`;

const SlickContentWrapper = styled.div`
  width: 100%;
  height: 108px;
  text-align: center;
  ${theme.ALIGN.COLUMN_CENTER};
  margin: auto;

  h2 {
    font-size: ${FONT_SIZE.FOUR_XL};
    font-weight: 900;
    font-family: Nunito;
    line-height: 32.74px;
    margin-bottom: 20px;
    text-align: center;
    color: #403b36;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.TWO_XL};
    }
  }

  p {
    font-size: ${FONT_SIZE.TWO_XL};
    font-weight: 700;
    line-height: 27.8px;
    text-align: center;
    width: 70%;
    color: #595550;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.XL};
    }
  }
`;

const AccountAvailability = styled.div`
  font-size: ${FONT_SIZE.BASE};
  font-weight: 800;
  letter-spacing: 0.1rem;
  margin-top: 30px;
  color: #1b9c85;
  line-height: 20.8px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

export {
  OnBoardingImg,
  NextButton,
  StyledSlider,
  CustomDot,
  SlickContentWrapper,
  AccountAvailability,
};
