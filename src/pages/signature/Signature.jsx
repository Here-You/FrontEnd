import styled from 'styled-components';

import Content from './main/Content';
import Message from './main/Message';

const SignaturePage = () => {
  const userName = 'cowboysj';
  const profileUrl = 'https://i.ibb.co/JdGMYqf/Group-1000000912.png';

  return (
    <PageWrap>
      <ProfileWrap>
        <ProfileImg src={profileUrl} />
        <UserName>{userName}</UserName>
      </ProfileWrap>
      <Message />
      <Divider />
      <Content />
    </PageWrap>
  );
};

export default SignaturePage;

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;

const ProfileWrap = styled.div`
  display: flex;
  height: 25%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  display: flex;
  border-radius: 100%;
  max-width: 40%;
`;

const UserName = styled.div`
  display: flex;
  font-family: 'Pretendard-bold';
  font-size: 18px;
`;

const Divider = styled.div`
  display: flex;
  width: 90%;
  height: 1px;
  background: var(--gray2, #c8c8c8);
`;
