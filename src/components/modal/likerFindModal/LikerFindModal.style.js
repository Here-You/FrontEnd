import styled from 'styled-components';

import theme from '@/theme';

const BodyContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const Title = styled.div`
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  height: 400px;
  gap: 50px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 375px;
  height: 85px;
  position: relative;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  }
`;

const Button = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${(props => props.follow)
    ? `${theme.COLOR.MAIN.LIGHT_GREEN}`
    : `${theme.COLOR.MAIN.LIGHT_GRAY}`};
`;

const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: none;
  position: absolute;
  left: 47px;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  width: 140px;
  gap: 3px;
  position: absolute;
  left: 121px;
`;

const UserName = styled.span`
  height: 15px;
  color: var(--black, #333);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
`;

const UserNickName = styled.span`
  height: 15px;
  color: #aaa;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
`;

const UserBio = styled.span`
  width: 100%;
  height: 15px;
  color: var(--black, #333);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div`
  position: absolute;
  right: 51px;
`;

export {
  BodyContainer,
  Container,
  Title,
  ProfileContainer,
  UserImg,
  TextContainer,
  UserName,
  UserNickName,
  UserBio,
  Wrapper,
  Button,
};
