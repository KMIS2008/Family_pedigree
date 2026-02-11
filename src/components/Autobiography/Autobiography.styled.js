import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: 2fr 1fr;
`

export const Title =styled.h3`
margin-bottom: 20px;
margin-top: 20px;
font-size: 30px;
text-align: center;
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

export const Image = styled.img`
margin: 0 auto;
margin-left: 20px;
  max-width: auto;
  max-height: 450px;
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