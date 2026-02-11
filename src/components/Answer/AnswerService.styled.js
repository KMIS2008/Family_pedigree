import styled from "styled-components";

export const Container=styled.ul`
margin-top: 20px;
display: flex;
flex-direction: column;
gap:20px;

`

export const SpanTitle=styled.span`
text-decoration: underline;
`

export const Iterm=styled.li`
display: flex;
justify-content: space-between;
align-items: center;

padding:20px;
list-style: none;
border: 1px solid ${p=>p.theme.colors.green};
border-radius: 10px;
`

export const Span=styled.span`
/* font-size: 24px; */
font-weight: 600;
`

