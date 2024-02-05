import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Editor from './Editor';
import * as S from './SignatureEdit.style';
import { useGetDetail } from '@/hooks/signature/useGetDetail';
import useSignatureEdit from '@/store/useSignatureEdit';

const SignatureEditPage = () => {
  const params = useParams();
  const { signatureId } = params;
  const { setPage, updateTitle } = useSignatureEdit();
  const { data, loading, error } = useGetDetail(signatureId);

  useEffect(() => {
    if (data) {
      const { header, pages } = data;
      updateTitle(header?.title);
      pages && setPage(pages);
    }
  }, [data]);

  return (
    <S.PageWrapper>
      <Editor signatureId={signatureId} />
    </S.PageWrapper>
  );
};

export default SignatureEditPage;
