import styled from "styled-components";

export const Container = styled.div`
margin-top: 30px;
`

export const Text = styled.p`
margin-top: ${p=>p.theme.spacing(4)};
margin-bottom: ${p=>p.theme.spacing(4)};

font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 18px;
text-align: left;

color: ${p=>p.theme.colors.red};
`

export const Adress=styled.p`
margin-bottom: 10px;
font-family: Inter;
font-size: 25px;
font-weight: 400;
line-height: 1.2;
text-align: left;
 white-space: normal;       /* Позволяет тексту переноситься */
overflow-wrap: break-word; /* Автоматически переносит слишком длинные слова */

color: ${p=>p.theme.colors.red};
`

export const LinkAdress=styled.a`
display: flex;
gap: 15px;
align-items: center;
margin-bottom: 5px;
font-family: Inter;
font-size: 25px;
font-weight: 600;
line-height: 1.2;
text-align: left;
text-decoration: underline;

color: black;
cursor: pointer;

&:hover{
  color: ${p=>p.theme.colors.blueTitle};
}
`

export const Title = styled.h3`
margin-top: 20px;
margin-bottom: 10px;
font-family: Inter;
font-weight: 600;
font-size: 25px;
line-height: 1.2;
text-align: left;
text-decoration: underline;

color: black;
`

export const ContainerSocialMediaIcons = styled.div`
display: flex;
justify-content: center; 
align-items: center;
width: 100px;
height: 100px;
background: ${p => p.theme.colors.red};
border-radius: 10px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`