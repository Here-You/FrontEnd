import MateSignature from './MateSignature';
import MateSignaturePreview from './MateSignaturePreview';
import * as S from './MateSignatureSection.style';

const MateSignatureSection = ({ text, matesData }) => {
  return (
    <S.ContentsContainer>
      <MateSignature text={text} />
      <S.PreviewContainer>
        {matesData.map((mateData, index) => (
          <MateSignaturePreview key={index} mateData={mateData} />
        ))}
      </S.PreviewContainer>
    </S.ContentsContainer>
  );
};

export default MateSignatureSection;
