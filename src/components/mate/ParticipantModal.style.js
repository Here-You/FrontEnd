import styled from 'styled-components';

import addIcon from '/images/mate/add-user.svg';
import theme from '@/theme';

const ModalBase = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  z-index: 3;
`;

const ModalContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 440px;
  height: 480px;
  border-radius: 20px;
  border-color: transparent;
  background-color: ${theme.COLOR.MAIN.WHITE};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 280px;
    height: 300px;
    border-radius: 10px;
  }
`;

const WrapContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: absolute;
  top: 60px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    top: 38px;
  }
`;

const StyledTitle = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const PlusButton = styled.button`
  position: absolute;
  width: 28px;
  height: 28px;
  margin-left: 300px;
  border: none;
  background-image: url(${addIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 20px;
    height: 20px;
  }
`;

const FixedContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: absolute;
  top: 100px;
  width: 100%;
  height: 320px;
  overflow-y: auto;
  padding: 10px 0;
`;

const NoParticipantsMessage = styled.p`
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const ParticipantWrap = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 54px;
  border-top: 0.5px solid #eee;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 48px;
  }
`;

const CancelButton = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  border-right: 0.5px solid #eee;
  background-color: transparent;
  cursor: pointer;

  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const OkButton = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  color: #ff8686;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

export {
  ModalBase,
  ModalContainer,
  WrapContainer,
  FixedContainer,
  StyledTitle,
  PlusButton,
  NoParticipantsMessage,
  ParticipantWrap,
  ButtonContainer,
  CancelButton,
  OkButton,
};
