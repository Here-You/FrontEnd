import styled from 'styled-components';

// import AddUserIcon from '/images/mate/add-user.svg';
import theme from '@/theme';

const InputContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.WHITE};
  margin-top: 10px 0;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 300px;
    height: 300px;
    border-radius: 10px;
  }
`;

const Topcontainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 100%;
  margin: 20px 0 10px 0;
`;

const LineWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 70%;
`;

const StyledTitle = styled.p`
  border: none;
  border-bottom: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  width: 100%;
  height: 36px;
  padding: 5px;

  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:focus {
    outline: none;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 25px;
    font-size: 14px;
  }
`;

const EditButton = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  font-size: 18px;
  position: absolute;
  right: 20px;
  border: none;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 40px;
    height: 20px;
    border-radius: 5px;
    font-size: 12px;
  }
`;

const Participant = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  margin: 20px 0;
  height: 30px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin: 10px;
    height: 20px;
  }
`;

const ParticipantImg = styled.div`
  ${theme.ALIGN.ROW_CENTER};

  img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: none;
    margin-left: -8px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    img {
      width: 12px;
      height: 12px;
      border-radius: 12px;
      margin-left: -4px;
    }
  }
`;

const ParticipantName = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-left: 10px;

  span {
    color: #aaa;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-left: 6px;

    span {
      font-size: 12px;
    }
  }
`;

const ParticipantOver = styled.img`
  ${theme.ALIGN.ROW_CENTER};
  width: 16px;
  margin-left: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 12px;
    margin-left: 6px;
  }
`;

const RuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
  height: 360px;
  padding: 5px;
  overflow-y: scroll;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 10px;
    height: 200px;
  }
`;

const SmallRule = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  width: 100%;
  height: auto;
  color: ${theme.COLOR.MAIN.BLACK};
  padding: 5px;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const RuleTitle = styled.p`
  width: 100%;
  border: none;
  padding: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  background-color: ${theme.COLOR.MAIN.WHITE};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const RuleDetail = styled.p`
  width: 100%;
  border: none;
  padding: 5px;
  font-size: 18px;
  background-color: ${theme.COLOR.MAIN.WHITE};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

export {
  InputContainer,
  Topcontainer,
  LineWrapper,
  StyledTitle,
  EditButton,
  RuleContainer,
  Participant,
  ParticipantImg,
  ParticipantName,
  ParticipantOver,
  SmallRule,
  RuleTitle,
  RuleDetail,
};

//   color: ${theme.COLOR.MAIN.WHITE};
//   text-align: center;
//   font-size: 22px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
//   cursor: pointer;

//   @media ${theme.WINDOW_SIZE.MOBILE} {
//     width: 40px;
//     height: 25px;
//     border-radius: 8px;
//     right: 10px;
//     font-size: 14px;
//   }
// `;

// const Participant = styled.div`
//   ${theme.ALIGN.ROW_CENTER};
//   width: 100%;
//   margin-top: 20px;
//   height: 30px;

//   @media ${theme.WINDOW_SIZE.MOBILE} {
//     margin-top: 10px;
//     height: 20px;
//   }
// `;

// const ParticipantImg = styled.div`
//   ${theme.ALIGN.ROW_CENTER};

//   img {
//     width: 20px;
//     height: 20px;
//     border-radius: 20px;
//     border: none;
//     margin-left: -8px;
//   }

//   @media ${theme.WINDOW_SIZE.MOBILE} {
//     img {
//       width: 12px;
//       height: 12px;
//       border-radius: 12px;
//       margin-left: -4px;
//     }
//   }
// `;

// const ParticipantName = styled.div`
//   ${theme.ALIGN.ROW_CENTER};
//   margin-left: 10px;

//   span {
//     color: #aaa;
//     text-align: center;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: normal;
//   }

//   @media ${theme.WINDOW_SIZE.MOBILE} {
//     margin-left: 6px;

//     span {
//       font-size: 12px;
//     }
//   }
// `;

// const ParticipantOver = styled.img`
//   ${theme.ALIGN.ROW_CENTER};
//   width: 16px;
//   margin-left: 10px;

//   @media ${theme.WINDOW_SIZE.MOBILE} {
//     width: 12px;
//     margin-left: 6px;
//   }
// `;

// export {
//   InputContainer,
//   Topcontainer,
//   LineWrapper,
//   StyledTitle,
//   EditButton,
//   Participant,
//   ParticipantImg,
//   ParticipantName,
//   ParticipantOver,
//   SmallRule,
//   InputRuleTitle,
//   InputRuleDetail,
// };
