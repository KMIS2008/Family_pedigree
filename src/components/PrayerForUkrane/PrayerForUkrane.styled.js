import styled from "styled-components";

export const Title = styled.h3`
margin-top: 20px;
margin-bottom: 10px;
color: ${p => p.theme.colors.blue};

cursor: pointer;
`

export const List = styled.ul`
margin-bottom: 40px;
list-style: none;
`

export const TitlePart=styled.h3`
margin-top: 20px;
margin-bottom: 10px;
padding-top: 20px;
text-align: center;
color: ${p=>p.theme.colors.blue};
`

export const Image = styled.img`
margin: 0 auto;
width: 50px;
height: 50px;
`

export const Text = styled.p`
margin-bottom: 20px;
text-align: justify;
text-indent: 30px;
line-height: 1.5;
`