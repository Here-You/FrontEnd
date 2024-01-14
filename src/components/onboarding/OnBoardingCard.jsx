import { useState } from 'react';

import * as S from './OnBoardingCard.style';
import onboardingImg1 from '/images/onboarding1.svg';
import onboardingImg2 from '/images/onboarding2.svg';
import onboardingImg3 from '/images/onboarding3.svg';
import onboardingImg4 from '/images/onboarding4.svg';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const OnBoardingCardPage = () => {
  const [dot, setDot] = useState(true);
  const [currentdot, setCurrentDot] = useState(0);
  const slideImages = [
    {
      id: 0,
      img: onboardingImg1,
      title: '우리가 여행을 즐기는 방법',
      content:
        'Notely is the world’s safest, largest and intelligent digital notebook. Join over 10M+ users already using Notely.',
      buttonText: 'NEXT',
    },
    {
      id: 1,
      img: onboardingImg2,
      title: '기록하세요',
      content:
        'Notely is the world’s safest, largest and intelligent digital notebook. Join over 10M+ users already using Notely.',
      buttonText: 'NEXT',
    },
    {
      id: 2,
      img: onboardingImg3,
      title: '성장하세요',
      content:
        'Notely is the world’s safest, largest and intelligent digital notebook. Join over 10M+ users already using Notely.',
      buttonText: 'NEXT',
    },
    // {
    //   id: 3,
    //   img: onboardingImg4,
    //   title: '우리가 여행을 즐기는 방법',
    //   content:
    //     'Notely is the world’s safest, largest and intelligent digital notebook. Join over 10M+ users already using Notely.',
    //   buttonText: '시작하기',
    // }, 여기는 포함되는건지 아직 모름
  ];

  const settings = {
    dots: true,
    speed: 1,
    slidesToShow: 1,
    draggable: false,
    customPaging: i => <S.CustomDot active={i === currentdot} />,
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
        {slideImages.map(slide => (
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
          nextHandler(currentdot);
        }}>
        {slideImages[currentdot].buttonText}
      </S.NextButton>
      <S.AccountAvailability>Alredy have an account?</S.AccountAvailability>
    </>
  );
};

export default OnBoardingCardPage;
