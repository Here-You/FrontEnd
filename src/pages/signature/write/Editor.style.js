import styled from 'styled-components';

import theme from '@/theme';

//SignatureWrite.jsx
const PageWrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
`;

//Editor.jsx
const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.input`
  outline: none;
  border: none;
  font-family: 'Pretendard-bold';
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Divider = styled.div`
  color: ${theme.COLOR.MAIN.LIGHT_BLACK};
  width: 100%;
  height: 1px;
  margin: 15px 0px;
`;
const ContentInput = styled.textarea`
  width: 100%;
  height: 50%;
  outline: none;
  border: none;
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LocationContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const LocationIcon = styled.img`
  margin: 0px 5px;
`;

const LocationButton = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    color: ${theme.COLOR.MAIN.BLACK};
  }
`;
const OptionContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  position: relative;
`;
const ButtonContainer = styled.div`
  position: absolute;
`;
const OptionButton = styled.img`
  margin: 0px 5px;
`;

const SubmitButton = styled.div`
  position: absolute;
  right: 5%;
  border-radius: 5px;
  background-color: ${theme.COLOR.MAIN.GREEN};
  padding: 5px 11px;
  color: white;
`;

export {
  EditorContainer,
  Title,
  Divider,
  ContentInput,
  LocationContainer,
  LocationIcon,
  LocationButton,
  OptionContainer,
  ButtonContainer,
  OptionButton,
  SubmitButton,
  PageWrapper,
};
