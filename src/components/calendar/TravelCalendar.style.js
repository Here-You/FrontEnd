import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  gap: 120px;
  margin-bottom: 20px;

  h1 {
    color: #1c1c1c;
    font-size: 130px;
    font-style: italic;
    font-family: bold;
    font-weight: 900;
    margin: 0;
  }
`;

const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(90deg);
  margin: 0;
  -ms-transform: rotate(90deg); // IE9
  -webkit-transform: rotate(90deg); // Chrome Safari Opera

  color: #1c1c1c;
  font-size: 25px;
  font-weight: bold;
`;
const CircleWrapper = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: black;
`;

export { Wrapper, HeaderWrapper, FontWrapper, CircleWrapper, Circle };
