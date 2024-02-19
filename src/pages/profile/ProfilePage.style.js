import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  padding: 10px;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 20px;
  align-items: flex-start;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 10px;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.1),
    0 13px 10px rgba(0, 0, 0, 0.02);
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const DescriptionContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 140px;
  height: 140px;
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

export {
  Container,
  Title,
  ImageContainer,
  Image,
  DescriptionContainer,
  GridContainer,
};
