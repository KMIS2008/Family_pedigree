import styled from "styled-components";

export const Container = styled.div`
margin-top: 20px;
padding: 20px; 
font-family: Arial;
`

export const PasswordWrapper = styled.div`
    width: 70%;
    position: relative;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        width: 35%;
    }
`;

export const EyeIcon = styled.div`
    position: absolute;
    right: 10px;
    cursor: pointer;
    font-size: 1.2em;
    color: gray;

    &:hover {
        color: black;
    }
`;

export const Input=styled.input`
width: 100%;
padding: 10px;
padding-right: 50px;
font-size: 16px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 5px;
`

export const ButtonCheck=styled.button`
display: block;
margin-top: 10px;
padding: 10px 20px;
font-size: 16px;
background-color:${p=>p.theme.colors.red};
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover{
color: ${p => p.theme.colors.red};
background-color:white;
}
`
export const ContainerButton=styled.div`
margin-top: 20px;
@media (min-width: 768px) {
    display: flex;
    gap:10px;
    justify-content: center;
    
}
`
export const ButtonSuccess=styled.button`
display: block;
margin-top: 10px;
padding: 10px 20px;
font-size: 16px;
background-color: #28a745;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover{
color: black;
}
`
export const Error=styled.p`
color: red;
margin-top: 10px; 
`

export const PrintIconWrapper = styled.div`
  margin-top: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #007BFF; /* основной цвет иконки */
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #0056b3; /* цвет при наведении */
    transform: scale(1.1); /* лёгкое увеличение */
  }
`;