import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 20px;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.1),
    0 13px 10px rgba(0, 0, 0, 0.02);
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
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

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export {
  Container,
  Title,
  ImageContainer,
  Image,
  DescriptionContainer,
  GridContainer,
};
