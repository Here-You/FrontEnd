import * as S from './MateRuleCheckSkeleton.style';

const MateRuleCheckSkeleton = () => {
  return (
    <S.SkeletonRules>
      <S.SkeletonUserInfo>
        <S.SkeletonProfile />
        <S.SkeletonProfileDesc />
      </S.SkeletonUserInfo>
      <S.SkeletonRuleTitle />
    </S.SkeletonRules>
  );
};

export default MateRuleCheckSkeleton;
