import styled from "styled-components";
import rose from '../../images/ukraine.jpg';

export const Container=styled.div`
width: 70%;
margin: 0 auto;  
padding:20px 40px;
background-color:#FFFF00;
border-radius: 20px;
border: 5px solid ${p => p.theme.colors.blue};

border: 80px solid transparent;
border-image: url(${rose}) 20% round; 
border-image-outset:40px;
`