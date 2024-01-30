import * as S from './SubCateGoryPage.style';
import editModal from '@/store/editModal';

const SubCateGoryPage = ({ children, listName }) => {
  const { onOpens } = editModal();

  return (
    <S.CategoryContainer>
      <h2>{children}</h2>
      {listName?.map(list => {
        return (
          <S.Subcategory
            key={list.id}
            onClick={() =>
              list.modal &&
              onOpens(
                '여행의 이유 로그아웃',
                '로그아웃',
                '로그아웃 하시겠습니까?',
              )
            }>
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
