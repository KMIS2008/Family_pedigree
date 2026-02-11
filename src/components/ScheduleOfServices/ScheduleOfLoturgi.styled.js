import styled from "styled-components";

export const Label=styled.label`
width: 100%;
`

export const Input = styled.input`
width: 100%;
height: 50px;

margin-bottom: ${p=>p.theme.spacing(2)};
margin-top: ${p => p.theme.spacing(2)};
padding-left: ${p => p.theme.spacing(4)};
padding-right: ${p=>p.theme.spacing(6)};

border-radius: 10px;
background: #FFFFFF;
outline: none;

border: 1px solid ${p=>p.theme.colors.red};
`

export const Button=styled.button`
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
color: black;
background-color: #28a745;
}
`
export const Error=styled.p`
color: red;
margin-top: 10px; 
`