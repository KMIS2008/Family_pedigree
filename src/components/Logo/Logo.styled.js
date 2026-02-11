import styled from "styled-components";

export const ContaterLogo = styled.div`
display: flex;
gap: ${p=>p.theme.spacing(2)};
align-items: center;
cursor: pointer;
&:hover{
    text-decoration: underline;
}
`

export const ImgLogo = styled.img`
width: 32px;
height: 32px;

@media (min-width: 768px) {
    width: 44px;
    height: 44px;
}
`