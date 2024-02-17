import * as S from './Search.style';
import useAuth from '@/store/useAuth';

const Search = ({ setSearchTerm }) => {
  const { isLogin } = useAuth();
  return (
    <S.SearchContainer>
      <S.InputContainer>
        <S.InputText
          placeholder={
            isLogin
              ? '닉네임으로 메이트를 추가해보세요.'
              : '로그인 후 메이트를 검색해보세요!'
          }
          onChange={e => setSearchTerm(e.target.value)}
          disabled={!isLogin}
        />
      </S.InputContainer>
    </S.SearchContainer>
  );
};

export default Search;
