import SubCateGoryPage from './SubCateGoryPage';
import { ETC, SUPPORT, USER_SETTING } from '@/constants/subcategory';

const Category = () => {
  return (
    <>
      <SubCateGoryPage listName={USER_SETTING} header={'유저 설정'} />
      <SubCateGoryPage listName={SUPPORT} header={'지원'} />
      <SubCateGoryPage listName={ETC} header={'기타'} />
    </>
  );
};
export default Category;
