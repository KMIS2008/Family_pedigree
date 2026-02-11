import styled from "styled-components";
import blueFlower from '../../images/blue-flower.png';

export const Container=styled.div`
width: 70%;
margin: 0 auto;  
padding:20px 50px;
background-color:${p=>p.theme.colors.allprayers};
border-radius: 20px;
border: 5px solid rgba(49, 7, 91, 1);

border-image: url(${blueFlower}) 20% round; 
border-image-width: 40px;
border-image-outset:20px;
`