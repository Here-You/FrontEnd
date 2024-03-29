import * as S from './MySignaturePage.style';
import NoSignature from './NoSignature';
import Preview from '@/components/preview/Preview';
import PreviewSkeleton from '@/components/preview/skeleton/PreviewSkeleton';
import { useSignaturePreview } from '@/hooks/signature/useSignaturePreview ';
import { QuitUserPage } from '@/pages';
import theme from '@/theme';

const MySignaturePage = () => {
  const { data: signaturePreview, loading, error } = useSignaturePreview();
  if (error) {
    return (
      <QuitUserPage type="not-login" bgColor={`${theme.COLOR.MAIN.WHITE}`} />
    );
  }
  return (
    <S.PageContainer>
      {loading ? (
        <S.PreviewContainer>
          {new Array(10).fill(0).map(() => (
            <PreviewSkeleton />
          ))}
        </S.PreviewContainer>
      ) : signaturePreview.length !== 0 ? (
        <S.PreviewContainer>
          {signaturePreview.map((s, _) => (
            <Preview key={s._id} signature={s} />
          ))}
        </S.PreviewContainer>
      ) : (
        <NoSignature />
      )}
    </S.PageContainer>
  );
};

export default MySignaturePage;
