import { FONT_SIZE } from "@/constants/size";
import theme from "@/theme";
import styled from "styled-components";



const EditPageWrap = styled.div`
    background-color: ${theme.COLOR.MAIN.LIGHT_BLACK};
    width: 100%;
    height: 100%;
    ${theme.ALIGN.COLUMN_CENTER}
    text-align: start;
    padding-top: 40px;
`;

const UserInfo = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
    width: 90%;
    font-size: ${FONT_SIZE.LG};


`;
export {EditPageWrap, UserInfo};