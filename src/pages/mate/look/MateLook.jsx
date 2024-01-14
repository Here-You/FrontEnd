import * as A from './MateLook.style';
import mateSearchIcon from '/images/mate_search.svg';
import { getMateLook } from '@/apis/request/mate';

const MateLookPage = () => {
  // const [profilesData, setProfilesData] = useState([]);

  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await getMateLook();
  //       setProfilesData(response.data);
  //     } catch (error) {
  //       console.error('데이터를 가져오는데 실패했습니다.', error);
  //     }
  //   };
  //   fetchProfileData();
  // }, []);

  return (
    <A.ContainerContainer>
      <A.FixedContainer>
        <A.StyledTitle>메이트 탐색하기</A.StyledTitle>
        <A.StyledDes>
          운명적인 여행 메이트, 어디없을까? <br />
          시그니처 태그를 통해 운명의 여행 메이트를 <br />
          탐색해보세요
        </A.StyledDes>
        <A.StyledIcon src={mateSearchIcon}></A.StyledIcon>
      </A.FixedContainer>
    </A.ContainerContainer>
  );
};

export default MateLookPage;
