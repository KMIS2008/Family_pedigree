import styled from "styled-components";

export const Container = styled.div`
max-width: 500px;
background-color: ${p => p.theme.colors.blue};

border-radius: 20px;
`

export const Title = styled.h1`
margin: 0 auto;
padding: 15px;

background: linear-gradient(
    to right, 
    ${p => p.theme.colors.blueGradientOne}, 
    ${p => p.theme.colors.blueGradientTwo}
  );

font-size: 40px;
color: ${p => p.theme.colors.white};
text-align: center;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`

