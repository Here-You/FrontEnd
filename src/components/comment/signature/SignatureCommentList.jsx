import * as S from './SignatureCommentList.style';
import SignatureComment from './commentView/signatureComment';

const PrifleImg =
  'https://images.unsplash.com/photo-1707638121353-c6853aae5725?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D';

const generateData = count => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: '차다인',
      image: PrifleImg,
      text: '댓글 내용',
      created: '2024-02-07T12:22:00.453Z',
    });
  }
  return data;
};

const Data = generateData(100);

const SignatureCommentList = () => {
  return (
    <S.Container>
      {Data.map(data => (
        <SignatureComment key={data.id} data={data} />
      ))}
    </S.Container>
  );
};

export default SignatureCommentList;
