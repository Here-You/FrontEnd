import * as S from './MySignaturePage.style';
import Preview from '@/components/preview/Preview';
import { useSignaturePreview } from '@/hooks/signature/useSignaturePreview ';

const MySignaturePage = () => {
  const { data: signaturePreview, loading, error } = useSignaturePreview();

  return (
    <S.PageContainer>
      <S.PreviewContainer>
        {signaturePreview.map((s, _) => (
          <Preview key={s.id} signature={s} />
        ))}
      </S.PreviewContainer>
    </S.PageContainer>
  );
};

export default MySignaturePage;
