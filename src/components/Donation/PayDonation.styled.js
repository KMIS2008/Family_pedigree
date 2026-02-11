import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 20px;
  text-align: justify;
  border-radius: 10px;
  border: 2px solid rgb(54, 79, 2);
  background: linear-gradient(45deg,rgb(140, 218, 85),rgb(216, 165, 138),rgb(194, 212, 80)); /* Від зеленого до помаранчевого */
  background-size: 400% 400%; /* Розширення для плавної анімації */
  animation: gradientAnimation 8s ease infinite; /* Анімація */

  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), 
  -5px 5px 15px rgba(0, 0, 0, 0.2); /* Тени вправо, вниз и влево */

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Text=styled.p`
margin: 20px 20px;
text-align: justify;
line-height: 1.5;
`