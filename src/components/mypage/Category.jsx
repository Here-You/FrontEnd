import SubCateGoryPage from './SubCategoryPage';
import { SUPPORT, USER_SETTING, ETC } from '@/constants/subcategory';
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
