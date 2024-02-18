import { useNavigate } from 'react-router-dom';

import Preview from './Preview';
import * as S from './SignatureSearchSlider.style';
import FollowRedirectPage from '@/pages/explore/followRedirect/FollowRedirectPage';
import NoSignature from '@/pages/signature/main/NoSignature';

const SignatureSearchSlider = ({ data, type, searchTerm }) => {
  const navigate = useNavigate();
  return (
    <S.PageContainer>
      {type === 'hot' ? (
        <S.Title>인기 급상승 시그니처🔥</S.Title>
      ) : type === 'new' ? (
        <S.Title>최신 시그니처⏰</S.Title>
      ) : (
        <S.Title>"{searchTerm}" 에 관한 시그니처⭐</S.Title>
      )}
      <S.PreviewContainer>
        {data?.length === 0 && (
          <S.EmptyContainer>
            {type === 'hot' && <NoSignature />}
            {type === 'new' && <FollowRedirectPage />}
          </S.EmptyContainer>
        )}
        {data === null ? (
          <S.EmptyContainer>
            <S.Text>로그인 후</S.Text>
            <S.Text>내 메이트의 새로운 여행 소식을 받아보세요!</S.Text>
            <S.Button onClick={() => navigate('/login')}>
              소셜 로그인으로 빠르게 사용하기!
            </S.Button>
          </S.EmptyContainer>
        ) : (
          data?.map((d, _) => {
            return <Preview key={d._id} data={d} />;
          })
        )}
      </S.PreviewContainer>
    </S.PageContainer>
  );
};

export default SignatureSearchSlider;
