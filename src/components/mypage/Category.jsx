import SubCateGoryPage from './SubCateGoryPage';
import { ETC, SUPPORT, USER_SETTING } from '@/constants/subcategory';

const Category = () => {
  return (
    <>
      <SubCateGoryPage listName={USER_SETTING}>유저설정</SubCateGoryPage>
      <SubCateGoryPage listName={SUPPORT}>지원</SubCateGoryPage>
      <SubCateGoryPage listName={ETC}>기타</SubCateGoryPage>
    </>
  );
};
export default Category;
