import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';

import * as S from './ProfilePage.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import { ProfileBox } from '@/components';
import { useMateProfileSearch } from '@/hooks/mate/useMateProfileSearch';
import { useInfiniteSignatureList } from '@/hooks/profile/queries/useInfiniteSignatureList';

const ProfilePage = () => {
  const { userId } = useParams();
  const { data, loading, error } = useMateProfileSearch(userId);

  const {
    data: signatures,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteSignatureList(userId);

  const signaturesList = signatures?.pages;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <S.Container>
      <ProfileBox profile={data} />
      <S.GridContainer>
        {signaturesList?.map(signature => {
          return signature.data.data.data.map(s => (
            <div key={s._id}>
              <S.Image src={s.image} alt={s.title} />
            </div>
          ));
        })}
      </S.GridContainer>
      <div
        ref={ref}
        style={{
          width: '',
          height: '100px',
          backgroundColor: 'red',
        }}>
        123
      </div>
    </S.Container>
  );
};

export default ProfilePage;
{
  /* <img src={Logo} style={{ width: '150px' }} />
<img src={Logo} style={{ width: '150px' }} />
<img src={Logo} style={{ width: '150px' }} />
<img src={Logo} style={{ width: '150px' }} />
<img src={Logo} style={{ width: '150px' }} />
<img src={Logo} style={{ width: '150px' }} />
<img src={Logo} style={{ width: '150px' }} />
<img src={Logo} style={{ width: '150px' }} />
<img src={Logo} style={{ width: '150px' }} /> */
}
