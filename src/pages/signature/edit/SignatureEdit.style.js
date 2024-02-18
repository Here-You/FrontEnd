import styled, { keyframes } from 'styled-components';

import theme from '@/theme';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Spinner = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid ${theme.COLOR.MAIN.MEDIUM_GREEN};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

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
  padding: 20px 0;
  border-bottom: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
`;

const Title = styled.input`
  outline: none;
  border: none;
  width: 80%;
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
  gap: 10px;
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
  background: var(--New-Main, #21b69c);
  padding: 5px 11px;
  outline: none;
  color: white;
  border: none;
  margin-right: 10px;
  margin-left: auto;
  cursor: pointer;
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
  gap: 40px;
`;

const InputWrap = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const PhotoButton = styled.label`
  border: 1px dashed #393939;
  width: 20vh;
  height: 20vh;
  ${theme.ALIGN.COLUMN_CENTER}
  position: relative;
`;

const Icon = styled.img`
  width: 15px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
`;

const Image = styled.img`
  position: absolute;
  width: 230px;
  height: 230px;
  top: 50;
  left: 50;
`;

const ImageInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  top: 0;
  left: 0;
  cursor: pointer;
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
  Icon,
  Image,
  ImageInput,
  Spinner,
};
