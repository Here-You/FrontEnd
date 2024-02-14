import LogoutModal from '../modal/mypage/LogoutModal';
import PublicScopeModal from '../modal/mypage/PublicScopeModal';
import * as S from './SubCateGoryPage.style';
import useLogoutModal from '@/hooks/modal/useLogoutModal';
import usePublicScopeModal from '@/hooks/modal/usePublicScopeModal';
import useAuth from '@/store/useAuth';

const SubCateGoryPage = ({ header, listName }) => {
  const publicScopeModal = usePublicScopeModal();

  return (
    <S.CategoryContainer>
      <h2>{header}</h2>
      {listName?.map(list => (
        <S.Subcategory
          key={list.id}
          onClick={() => {
            if (list.modal === true && list.id === 3) {
              return publicScopeModal.onOpen();
            }
          }}>
          <S.LinkTo to={list.link}>
            <S.CategoryImg src={list.img} alt={list.title} />
            <p>{list.title}</p>
          </S.LinkTo>
        </S.Subcategory>
      ))}
      <LogoutModal />
      <PublicScopeModal />
    </S.CategoryContainer>
  );
};

export default SubCateGoryPage;
