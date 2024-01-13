import { FONT_SIZE } from "@/constants/size";
import theme from "@/theme";
import styled from "styled-components";

const LoginWrap =styled.div`
    ${theme.ALIGN.COLUMN_CENTER};
   
    height: 100%;   

`

const LogoImg = styled.img`
    width: 50%;
    margin-bottom: 100px;
`

export {LoginWrap, LogoImg};