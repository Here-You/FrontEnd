import * as A from './Title.style';

const Title = ({ text }) => {
  return (
    <div>
      <A.StyledSpan> {text}</A.StyledSpan>
    </div>
  );
};

export default Title;
