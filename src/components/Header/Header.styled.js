import styled from "styled-components";

export const Container=styled.div`
padding-top: 20px;
position: relative;
width: auto;
/* background: #9ACD32; */
`

export const ContainerTitle=styled.div`
padding-bottom: 20px;
display: flex;
justify-content: space-between;
gap:20px;

@media (min-width: 768px) {
    justify-content: center;
    gap:40px;
}

`

export const ContainerTitleHeader=styled.div`
text-align:center;
`

export const Img=styled.img`
margin: auto;
width: 100%;
`

export const ImgHeader=styled.img`
display: flex;
align-items: center;
margin-left: 20px;
width: auto;
height:60px;

@media (min-width: 768px) {
    height:100px;
}
`
export const ContaterHeder = styled.div`
position: absolute;
top:0px;

display: flex;
justify-content: center;
align-items: center;
padding: 5px 20px;
/* background-color: ${p=>p.theme.colors.bluelight};  */
width: 100%;

@media (min-width: 1440px) {
    padding: 25px 128px;
}
`
export const Title=styled.h2`
 font-family: 'Ancient Kyiv', sans-serif;
margin: 0 auto; 
padding-top: 10px;

/* font-family: "Dancing Script", cursive; */
font-size: 20px;
letter-spacing: 3px; 
color: ${p=>p.theme.colors.red};
text-align: center;

@media (min-width: 768px) {
    font-size:40px;
}

@media (min-width: 1440px) {
    padding-bottom: 10px;
    font-size:60px;
}
`

export const Svg = styled.svg`
display: block;
margin-right: 10px;
margin-left: auto;
width: 32px;
height: 26px;
cursor: pointer;

@media (min-width: 768px) {
    font-size:20px;
}

@media (min-width: 1440px) {
    font-size:24px;
}
`

export const ContainerSvgCart=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 44px;
height: 44px;
border-radius: 50%;
background: ${p=>p.theme.colors.white};
`

export const ContainerNavigate=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:10px;
`

export const CounterCarts=styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 0px;
right: 0;
width: 16px;
height: 16px;

font-family: Inter;
font-size: 12px;
font-weight: 700;
line-height: 1,21;

color: ${p=>p.theme.colors.green};
background: #59B17A1A;
border-radius: 50%;
`