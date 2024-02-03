import { useNavigate } from 'react-router-dom';

import * as S from './SubCateGoryPage.style';
import useLogOutModal from '@/store/useLogOutModal';

const SubCateGoryPage = ({ children, listName }) => {
  const { LogOutOnOpen } = useLogOutModal();
  const navigate = useNavigate();

  const handleClick = list => {
    if (list.modal) {
      LogOutOnOpen();
    } else if (list.notion) {
      window.open(
        'https://sally626.notion.site/444bf09f12b54b86932f0ad462dde398?pvs=4',
      );
    }
  };

  return (
    <S.CategoryContainer>
      <h2>{children}</h2>
      {listName?.map(list => (
        <S.Subcategory key={list.id} onClick={() => handleClick(list)}>
          <S.LinkTo to={list.link}>
            <S.CategoryImg src={list.img} alt={list.title} />
            <p>{list.title}</p>
          </S.LinkTo>
        </S.Subcategory>
      ))}
    </S.CategoryContainer>
  );
};

export default SubCateGoryPage;
