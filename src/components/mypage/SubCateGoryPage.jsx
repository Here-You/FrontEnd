import * as S from './SubCateGoryPage.style';
import editModal from '@/store/editModal';
import useLogOutModal from '@/store/useIntroModal copy';

const SubCateGoryPage = ({ children, listName }) => {
  const { LogOutOnOpen } = useLogOutModal();

  return (
    <S.CategoryContainer>
      <h2>{children}</h2>
      {listName?.map(list => {
        return (
          <S.Subcategory
            key={list.id}
            onClick={() => list.modal && LogOutOnOpen()}>
            <S.LinkTo to={list.link}>
              <S.CategoryImg src={list.img} alt={list.title} />
              <p>{list.title}</p>
            </S.LinkTo>
          </S.Subcategory>
        );
      })}
    </S.CategoryContainer>
  );
};

export default SubCateGoryPage;
