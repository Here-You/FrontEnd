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
  width: 100%;
  height: 1px;
  background-color: ${theme.COLOR.MAIN.LIGHT_BLACK};
  margin: 15px 0px;
`;
const LocationContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: flex-start;
  margin: 10px 0px;
`;

const LocationIcon = styled.img``;

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

const ContentInput = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 20px 10px 10px 0px;
`;

const OptionContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  position: relative;
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
  SubmitButton,
  PageWrapper,
};
