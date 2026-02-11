import styled from "styled-components";


export const Title =styled.h2`
margin-bottom: 20px;
margin-top: 20px;
text-align: center;
font-size: 28px;
color:rgb(4, 112, 227);
/* text-shadow: -2px -2px 0px rgb(231, 251, 48), 2px 2px 0px rgb(41, 198, 223); */

cursor: pointer;

&:hover{
    text-decoration: underline;
}

@media (min-width: 768px) {
    font-size: 34px;
}

@media (min-width: 1440px) {
    font-size:40px;
}
`