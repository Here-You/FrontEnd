import * as S from './MySignaturePage.style';
import Preview from '@/components/preview/Preview';
import { useSignaturePreview } from '@/hooks/signature/useSignaturePreview ';
import { ErrorPage } from '@/pages';

const MySignaturePage = () => {
  const { data: signaturePreview, loading, error } = useSignaturePreview();

  if (error) {
    return <ErrorPage />;
  }

  return (
    <S.PageContainer>
      <S.PreviewContainer>
        {signaturePreview.map((s, _) => (
          <Preview key={s._id} signature={s} />
        ))}
      </S.PreviewContainer>
    </S.PageContainer>
  );
};

export default MySignaturePage;
