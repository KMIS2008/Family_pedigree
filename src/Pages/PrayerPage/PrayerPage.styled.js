import styled from "styled-components"
import rose from '../../images/ukraine.jpg';

export const Container=styled.div`
width: 80%;
margin: 0 auto;  
padding: 0 20px;
background-color: rgba(255, 255, 0, 0.5);

border: 80px solid transparent;
border-image: url(${rose}) 20% round; 
border-image-outset:40px;
`

export const ContainerColum = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
gap: 20px;
`
