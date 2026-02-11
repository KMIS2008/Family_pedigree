import styled from "styled-components";

export const ContainerHome= styled.div` 
padding: 20px 40px;
background:rgb(217, 242, 166);
`

export const Container=styled.div`
@media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 30px;
}
`

export const Image = styled.img`
margin: 0 auto;
  margin-bottom: 60px;
  max-width: auto;
  max-height: 500px;
  border-radius: 8px; /* Опционально, добавляет закругленные углы */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), 
              -5px 5px 15px rgba(0, 0, 0, 0.2); /* Тени вправо, вниз и влево */
              
  opacity: 0; /* Начальная прозрачность */
  transform: scale(0.6); /* Начальный размер */
  animation: fadeInScale 3s ease-in-out forwards; /* Анимация */
  
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