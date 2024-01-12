import styled from 'styled-components';

const SignatureWritePage = () => {
  return (
    <div>
      <Title placeholder="제목" />
    </div>
  );
};

export default SignatureWritePage;

const Title = styled.input`
  outline: none;
  border: none;
  color: var(--black, #393939);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
