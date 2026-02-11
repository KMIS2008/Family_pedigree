import styled, { keyframes } from "styled-components";

export const Container = styled.div`
position: relative;
padding-top: 40px;
`

export const SvgButton = styled.div`
display: block;
position:absolute;
right: 0; top: 0;
margin-left: auto;


cursor: pointer;
&:hover{
    background: ${p => p.theme.colors.yellow};
    border: 1px solid ${p => p.theme.colors.red};
    border-radius: 5px;
}
`

export const Title =styled.h1`
margin-top: ${p=>p.theme.spacing(5)};
margin-bottom: ${p=>p.theme.spacing(5)};
font-family: 'Chronicle', sans-serif;
font-weight: 600;
line-height: 1,43;
text-align: center;
color:${p=>(p.theme.colors.red)};
`

export const Text=styled.p`
margin-bottom: ${p=>p.theme.spacing(4)};
font-family: 'Chronicle', sans-serif;
font-size: 35px;
font-weight: 400;
line-height: 1,1;
text-align: justify;
text-indent: 20px;
color:rgb(4, 75, 28);
white-space:normal ; /* Allow text to wrap to the next line */
  word-wrap: break-word; /* Ensure long words break to next line */
  overflow-wrap: break-word; /* Ensure long words break to next line */
`

const parchmentFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    text-shadow: none;
    letter-spacing: normal;
  }
`;

export const ModalText = styled.div`
font-family:Rutenia, sans-serif;
  animation: ${parchmentFadeIn} 1.5s ease-out forwards;
`;


const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const TypewriterText = styled.div`
white-space: pre-line;
  overflow: hidden;
  /* white-space: nowrap; */
  /* border-right: 2px solid rgba(0, 0, 0, 0.75); */
  animation: ${typewriter} 3s steps(40) 1s forwards;
`;

export const Button=styled.button`
position: absolute;
top: 0;
left: 0;
padding: 5px;
border: 2px solid ${p=>(p.theme.colors.red)};
border-radius: 10px;
background: ${p => p.$audioPlaying ? p.theme.colors.red : p.theme.colors.yellow};
color: ${p => p.$audioPlaying ? p.theme.colors.white : p.theme.colors.red};
font-family: 'Rutenia', sans-serif;
text-align: center;

cursor: pointer;
`