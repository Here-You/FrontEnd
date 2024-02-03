import * as S from './SubCateGoryPage.style';
import editModal from '@/store/editModal';

const SubCateGoryPage = ({ children, listName }) => {
  const { onOpen } = editModal();

  return (
    <S.CategoryContainer>
      <h2>{children}</h2>
      {listName?.map(list => {
        return (
          <S.Subcategory
            key={list.id}
            onClick={() => list.modal && onOpen(list.modal, list.modalNum)}>
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