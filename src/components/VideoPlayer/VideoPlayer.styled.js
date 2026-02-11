import styled from "styled-components";

export const Container=styled.div`
text-align: center; 
margin-top: 20px; 
margin-bottom: 70px;

  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), 
              -5px 5px 15px rgba(0, 0, 0, 0.2); /* Тени вправо, вниз и влево */
`

export const ContainerPlayer=styled.div`
            position: relative;
            width: 100%;
            padding-top: 500px; /* Соотношение сторон 16:9 */
         
            background-size: cover;
            background-position: center;
            cursor: pointer;
`

export const Icon=styled.div`
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 50%;
              padding: 20px;
`

export const IconSpan=styled.span`
color: #fff;
font-size: 24px; 
`