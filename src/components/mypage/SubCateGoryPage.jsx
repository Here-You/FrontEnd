import * as S from './SubCateGoryPage.style';

const SubCateGoryPage = ({ header, listName }) => {
  return (
    <S.CategoryContainer>
      <h2>{header}</h2>
      {listName?.map(list => (
        <S.Subcategory key={list.id}>
          <S.LinkTo to={list.link}>
            <S.CategoryImg src={list.img} alt={list.title} />
            <p>{list.title}</p>
          </S.LinkTo>
        </S.Subcategory>
      ))}
    </S.CategoryContainer>
  );
};

export default SubCateGoryPage;
