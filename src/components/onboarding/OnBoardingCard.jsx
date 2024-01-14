import { useState } from 'react';

import * as S from './OnBoardingCard.style';
import { BOARDING_SLIDE } from '@/constants/boardingSlide';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const OnBoardingCardPage = () => {
  const [dot, setDot] = useState(true);
  const [currentDot, setCurrentDot] = useState(0);

  const settings = {
    dots: true,
    speed: 1,
    slidesToShow: 1,
    draggable: false,
    customPaging: i => <S.CustomDot active={i === currentDot} />,
  };

  const nextHandler = id => {
    if (id !== 2) {
      setCurrentDot(id + 1);
      slideRef.slickNext();
      if (id === 1) {
        setDot(false);
      }
    }
  };

  let slideRef;

  return (
    <>
      <S.StyledSlider ref={slider => (slideRef = slider)} {...settings}>
        {BOARDING_SLIDE.map(slide => (
          <div key={slide.id}>
            <S.OnBoardingImg
              src={slide.img}
              alt={slide.text}
              id={`image-${slide.id}`}
            />
            <S.SlickContentWrapper>
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </S.SlickContentWrapper>
          </div>
        ))}
      </S.StyledSlider>
      <S.NextButton
        onClick={() => {
          nextHandler(currentDot);
        }}>
        {BOARDING_SLIDE[currentDot].buttonText}
      </S.NextButton>
      <S.AccountAvailability>Already have an account?</S.AccountAvailability>
    </>
  );
};

export default OnBoardingCardPage;
