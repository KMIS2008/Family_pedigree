import styled from "styled-components";

export const Form=styled.form`
@media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
}

@media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
}
`

export const Label=styled.label`
width: 100%;
`

export const Select=styled.select`
margin-top: 10px;
margin-bottom: 30px;
width: 100%;
height: 50px;
border-radius: 10px;
background: #FFFFFF;
outline: none;
`

export const Input=styled.input`
margin-bottom: ${p=>p.theme.spacing(6)};
margin-top: ${p=>p.theme.spacing(2)};
padding-left: ${p=>p.theme.spacing(4)};
width: 100%;
height: 44px;
border-radius: 20px;
background: #FFFFFF;
outline: none;

border: 1px solid #1D1E211A;

&::placeholder{
    padding-left: 20px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 1,5;
    color: #1D1E2166;
}

@media (min-width: 1440px) {
    &::placeholder {
        font-size: 22px;
    }
  }
`

export const Textarea=styled.textarea`
margin-bottom: ${p=>p.theme.spacing(6)};
margin-top: ${p=>p.theme.spacing(2)};
padding-left: ${p=>p.theme.spacing(4)};
width: 100%;
height: 300px;
border-radius: 10px;
background: #FFFFFF;
outline: none;

border: 1px solid #1D1E211A;

&::placeholder{
    padding-left: 20px;
    padding-top: 10px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 1,5;
    color: #1D1E2166;
}

@media (min-width: 1440px) {
    &::placeholder {
     font-size: 22px; 
    }
  }
`

export const Span=styled.span`
color: red;
`

export const ContainerButton=styled.div`
display: flex;
justify-content: center;
gap:20px;
`

export const Button = styled.button`
padding: 10px;
color: white;
background:${p=>p.theme.colors.green};
border-radius: 10px;

cursor: pointer;

&:hover {
color: black;
}
`

export const ButtonDonation = styled.button`
padding: 10px;
color: ${p=>p.theme.colors.green};
border: 2px solid ${p=>p.theme.colors.green};   
border-radius: 10px;
cursor: pointer;

&:hover{
color: ${p=>p.theme.colors.white};
background:${p=>p.theme.colors.green};    
}
`