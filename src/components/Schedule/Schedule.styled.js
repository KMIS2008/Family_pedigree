import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 60px;
font-size: 24px;
`

export const List=styled.ul`
list-style: none;
`

export const TitleChapter=styled.h3`
margin-top: 20px;
margin-bottom: 20px;
text-align: center;
font-size: 30px;
color: ${p=>p.theme.colors.blueTitle};
`

export const Item = styled.li`
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  background-color: ${({ $bgColor }) => $bgColor || "transparent"};
  color: ${({ $color }) => $color || "black"};

  ${({ $flex }) =>
    $flex &&
    `
      display: flex;
      justify-content: space-between;
    `}
`;

export const Svg = styled.svg`
margin-right: 0;
margin-left: auto;

cursor: pointer;
`
export const Text=styled.p`
padding-bottom: 20px;
text-align: justify;
font-size: 16px;

/* text-indent: 40px; */

@media (min-width: 768px) {
    font-size: 20px;
}

@media (min-width: 1440px) {
    font-size:24px;
}
`
export const Title =styled.h3`
margin-bottom: 20px;
margin-top: 20px;
font-size: 30px;
text-align: center;
`

export const Span = styled.span`
font-style: italic;
`

export const ListText = styled.ul`
padding-left: 40px;
`
