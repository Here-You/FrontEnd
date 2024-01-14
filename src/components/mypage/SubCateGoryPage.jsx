import * as S from './SubCateGoryPage.style';
import editModal from '@/store/editModal';

const SubCateGoryPage = ({ children, listName }) => {
  const { onOpen } = editModal();
  console.log(listName);
  return (
    <S.CategoryContainer>
      <h2>{children}</h2>
      {listName?.map(list => {
        return (
          <S.Subcategory key={list.id}>
            <S.LinkTo
              to={list.link}
              onClick={list.id === 1 ? () => onOpen(3) : undefined}>
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
