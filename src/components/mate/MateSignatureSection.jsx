import MateSignaturePreview from './MateSignaturePreview';
import * as S from './MateSignatureSection.style';

const MateSignatureSection = ({ data, ref }) => {
  return data?.map((d, index) => (
    <S.ContentsContainer>
      <S.SubWrapper>
        <span>
          {d.information.nickname}님이 사용한 위치 [#
          {d.information.location}]를 함께 이용 중인 메이트
        </span>
      </S.SubWrapper>
      <S.PreviewContainer>
        {d.mates.map((mate, i) => (
          <MateSignaturePreview key={i} mateData={mate} />
        ))}
        {/* <div ref={ref}></div> */}
      </S.PreviewContainer>
    </S.ContentsContainer>
  ));
};

export default MateSignatureSection;
