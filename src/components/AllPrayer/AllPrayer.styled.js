import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container=styled.div`
margin-bottom: 60px;

display: flex;
flex-direction: column;
line-height: 1.5;
font-weight: 600;

cursor: pointer;
&:hover{
    text-decoration: underline;
}
`

export const TitlePart=styled.h3`

margin-top: 20px;
margin-bottom: 20px;
padding-left: 40px;
font-style: italic;
`
export const LinkPrayer = styled(Link)`
  padding-left: 40px;
  text-decoration: none;
  color: ${p=>p.theme.colors.red};
  font-size: 26px;
  font-size: 600;
  line-height: 1.5;

  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;