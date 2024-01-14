import * as S from './Category.style';
import editModal from '@/store/editModal';
import { SubCategory } from '@/constants/subcategory';

const Category = () => {
  const { onOpen } = editModal();

  return (
    <>
      <S.CategoryContainer>
        <S.MyPageCategoryTitle>유저설정</S.MyPageCategoryTitle>
        {SubCategory.map(
          c =>
            c.id < 5 && (
              <S.Subcategory key={c.id}>
               <S.LinkTo to={c.link} onClick={c.id === 1 ? () => onOpen(3) : undefined}>
                  <S.CategoryImg src={c.img} alt={c.title} />
                  <S.SubcategoryContent>{c.title}</S.SubcategoryContent>
                </S.LinkTo>
              </S.Subcategory>
            ),
        )}
      </S.CategoryContainer>
      <S.CategoryContainer>
        <S.MyPageCategoryTitle>지원</S.MyPageCategoryTitle>

        {SubCategory.map(
          c =>
            c.id > 4 &&
            c.id < 8 && (
              <S.Subcategory key={c.id}>
                   <S.LinkTo to={c.link}>
                  <S.CategoryImg src={c.img} alt={c.title} />
                  <S.SubcategoryContent>{c.title}</S.SubcategoryContent>
                </S.LinkTo>
              </S.Subcategory>
            ),
        )}
      </S.CategoryContainer>
      <S.CategoryContainer>
        <S.MyPageCategoryTitle>기타</S.MyPageCategoryTitle>

        {SubCategory.map(
          c =>
            c.id > 7 && (
              <S.Subcategory key={c.id}>
                   <S.LinkTo to={c.link}>
                  <S.CategoryImg src={c.img} alt={c.title} />
                  <S.SubcategoryContent>{c.title}</S.SubcategoryContent>
                </S.LinkTo>
              </S.Subcategory>
            ),
        )}
      </S.CategoryContainer>
    </>
  );
};
export default Category;
