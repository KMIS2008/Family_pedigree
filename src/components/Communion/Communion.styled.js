import styled from "styled-components";
import { Link } from 'react-router-dom';


export const List = styled.ul`
margin-bottom: 30px;
padding-left: 20px;
`

export const Title = styled(Link)`
display: block;
margin: 0 auto;
margin-bottom: 10px;
color: ${p=>p.theme.colors.blue};

cursor: pointer;

&:hover{
    text-decoration: underline;
}
`
export const Text=styled.p`
text-align: justify;
text-indent: 30px;
line-height: 1.5;
`