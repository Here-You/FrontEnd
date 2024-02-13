import TokenErrorPage from '../TokenErrorPage';
import * as S from './MySignaturePage.style';
import NoSignature from './NoSignature';
import Preview from '@/components/preview/Preview';
import { useSignaturePreview } from '@/hooks/signature/useSignaturePreview ';

const MySignaturePage = () => {
  const { data: signaturePreview, loading, error } = useSignaturePreview();

  if (error) {
    return <TokenErrorPage />;
  }

  return (
    <S.PageContainer>
      {signaturePreview.length !== 0 ? (
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
