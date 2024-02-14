import { useEffect, useState } from 'react';

import LogoutModal from '../modal/mypage/LogoutModal';
import PublicScopeModal from '../modal/mypage/PublicScopeModal';
import * as S from './SubCateGoryPage.style';
import useLogoutModal from '@/hooks/modal/useLogoutModal';
import usePublicScopeModal from '@/hooks/modal/usePublicScopeModal';

const SubCateGoryPage = ({ children, listName }) => {
  const logoutModal = useLogoutModal();
  const [isLogin, setIsLogin] = useState();
  const publicScopeModal = usePublicScopeModal();

  const handleClick = list => {
    if (isLogin) {
      if (list.modal) {
        if (list.id === 1) {
          logoutModal.onOpen();
        } else if (list.id === 4) {
          publicScopeModal.onOpen();
        }
      } else if (list.notion) {
        window.open(
          'https://sally626.notion.site/444bf09f12b54b86932f0ad462dde398?pvs=4',
        );
      }
    } else {
      if (!list.notion) {
        if (list.id === 1) {
        } else {
          alert('로그인 후 이용해주세요');
        }
      } else {
        window.open(
          'https://sally626.notion.site/444bf09f12b54b86932f0ad462dde398?pvs=4',
        );
      }
    }
  };

  useEffect(() => {
    setIsLogin(Boolean(localStorage.getItem('x-access-token')));
  }, [localStorage.getItem('x-access-token')]);

  return (
    <S.CategoryContainer>
      <h2>{children}</h2>
      <LogoutModal />
      <PublicScopeModal />
      {listName?.map(list => {
        return (
          <S.Subcategory key={list.id} onClick={() => handleClick(list)}>
            <S.LinkTo to={list.link}>
              <S.CategoryImg src={list.img} alt={list.title} />
              {list.title ? (
                <p>{list.title}</p>
              ) : isLogin ? (
                <p>로그아웃</p>
              ) : (
                <p>로그인</p>
              )}
            </S.LinkTo>
          </S.Subcategory>
        );
      })}
    </S.CategoryContainer>
  );
};

export default SubCateGoryPage;
