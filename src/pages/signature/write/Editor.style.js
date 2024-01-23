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

const ButtonWrap = styled.div`
  display: flex;
  margin-left: 55%;
  font-family: 'Pretendard-bold';
`;

const AddButton = styled.button`
  display: flex;
  border-radius: 5px;
  background: var(--New-Main, #21b69c);
  padding: 5px 11px;
  outline: none;
  color: white;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  border-radius: 5px;
  background: ${props => (props.enabled ? 'var(--New-Main, #21b69c)' : '#ccc')};
  padding: 5px 11px;
  outline: none;
  color: white;
  border: none;
  margin-right: 10px;
  cursor: ${props => (props.enabled ? 'pointer' : 'not-allowed')};
`;

const ContentContainer = styled.div`
  display: flex;
`;

const Empty = styled.div`
  width: 26px;
  height: 26px;
`;

const Empty2 = styled.div`
  width: 93px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrap = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const PhotoButton = styled.label`
  border: 1px dashed #393939;
  width: 20vh;
  height: 20vh;
  ${theme.ALIGN.COLUMN_CENTER}
  position: relative;
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
  ButtonWrap,
  AddButton,
  Button,
  ContentContainer,
  Empty,
  Empty2,
  PageContainer,
  InputWrap,
  PhotoButton,
};
