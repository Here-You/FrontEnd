import SubCateGoryPage from './SubCateGoryPage';
import { ETC, SUPPORT, USER_SETTING } from '@/constants/subcategory';
import useAuth from '@/store/useAuth';

const Category = () => {
  const { isLogin } = useAuth();
  return (
    <>
      {isLogin && (
        <SubCateGoryPage listName={USER_SETTING} header={'유저 설정'} />
      )}
      <SubCateGoryPage listName={SUPPORT} header={'지원'} />
      <SubCateGoryPage listName={ETC} header={'기타'} />
    </>
  );
};
export default Category;
