import * as S from './Search.style';

const Search = ({ setSearchTerm }) => {
  return (
    <S.SearchContainer>
      <S.InputContainer>
        <S.InputText
          placeholder="닉네임으로 메이트를 추가해보세요."
          onChange={e => setSearchTerm(e.target.value)}
        />
      </S.InputContainer>
    </S.SearchContainer>
  );
};

export default Search;
