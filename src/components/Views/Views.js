import {Container} from './Views.styled';

export const Views=({count})=>{
    return(
        <Container>
          <h4>Кількість перегдлядів: {count}</h4>
       </Container>
    )
}