import {Container, Title} from './AboutUsPage.styled';
import { About } from 'components/About/About';

export default function AboutUsPage(){
    return(
      <Container>
         <Title> Про нас </Title>
         <About/>
      </Container>
    )
}