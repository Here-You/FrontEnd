import styled from 'styled-components';

import Editor from './Editor';

const SignatureWritePage = () => {
  return (
    <Wrap>
      <Editor />
    </Wrap>
  );
};

export default SignatureWritePage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  height: 100%;
`;
