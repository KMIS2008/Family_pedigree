import styled from "styled-components";

export const Container = styled.div`
padding: 0 20px;
`

export const TitleChapter=styled.h3`
margin-top: 20px;
margin-bottom: 20px;
text-align: center;
` 

export const TitleParagraph=styled.h4`
margin-top: 20px;
margin-bottom: 20px;
`

export const Text=styled.p`
text-indent: 30px;
text-align: justify;
`

export const Span = styled.span`
font-weight: 500;
`

export const List = styled.ul`
padding: 0 40px;
list-style: none;
text-indent: 30px;
`

export const TextAccent = styled.p`
margin-top: 40px;
font-size: 30px;
font-weight: 700;
color: ${p=>p.theme.colors.red};
`

export const SpanAccent = styled.span`
font-size: 50px;
`

export const SpanAccentSmall = styled.span`
font-size: 24px;
`