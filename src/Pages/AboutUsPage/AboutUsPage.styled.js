import styled from "styled-components";

export const Container=styled.div`
padding: 40px;
/* background-color: rgb(229, 236, 149); */
background-color: ${p=>(p.theme.colors.yellow)};
`

export const Title =styled.h2`
margin-bottom: 20px;
margin-top: 20px;
text-align: center;
font-size: 28px;

@media (min-width: 768px) {
    font-size: 34px;
}

@media (min-width: 1440px) {
    font-size:40px;
}
`

