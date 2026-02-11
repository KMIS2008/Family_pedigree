import styled from "styled-components";

export const Container=styled.div`
/* max-width: 1440px; */
margin-bottom: 60px;
`

export const ContainerText=styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
gap:40px;
`

export const Title =styled.h3`
margin-bottom: 20px;
margin-top: 20px;
font-size: 30px;
text-align: center;
color:rgb(4, 112, 227);
`

export const Text=styled.p`
padding-bottom: 20px;
text-align: justify;
font-size: 16px;

text-indent: 40px;

@media (min-width: 768px) {
    font-size: 20px;
}

@media (min-width: 1440px) {
    font-size:24px;
}
`

export const Line = styled.div`
margin-top: 20px;
margin-bottom: 20px;
width: 100%;
height: 1px;
background-color: black;
`

export const Span = styled.span`
font-weight: 500;
font-size: 20px;
`

export const List = styled.ul`
margin-bottom: 20px;
list-style: none;
padding: 0 40px;
`

export const Item = styled.li`
margin-bottom: 5px;
`

export const TextList = styled.p`
font-size: 20px;
`

export const SpanText = styled.span`
font-weight: 500;
`
export const Image = styled.img`

margin: 0 auto;
margin-bottom: 30px;
  max-width: auto;
  max-height: 500px;
  border-radius: 8px; /* Опционально, добавляет закругленные углы */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), 
              -5px 5px 15px rgba(0, 0, 0, 0.2); /* Тени вправо, вниз и влево */

              opacity: 0; /* Начальная прозрачность */
  transform: scale(0.6); /* Начальный размер */
  animation: fadeInScale 2500ms ease-in-out forwards; /* Анимация */
  
  @keyframes fadeInScale {
    0% {
      opacity: 0;
      transform: scale(0.6);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;