import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const DescriptionContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  cursor: pointer;

  h1 {
    padding: 10px;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 5px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
  gap: 10px;
`;

export {
  Container,
  ImageContainer,
  Image,
  DescriptionContainer,
  GridContainer,
};
