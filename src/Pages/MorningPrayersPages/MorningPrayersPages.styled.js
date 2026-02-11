import styled from "styled-components";
import flower from '../../images/flower.png';

export const Container=styled.div`
width: 70%;
margin: 0 auto;  
padding:20px 50px;
background-color: ${p=>p.theme.colors.morning};
border-radius: 20px;
border: 5px solid ${p => p.theme.colors.red};

border-image: url(${flower}) 20% round; 
border-image-width: 40px;
border-image-outset:20px;
`