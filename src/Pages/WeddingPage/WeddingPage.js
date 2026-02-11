import {Wedding} from '../../components/Wedding/Wedding';
import { Tittle } from 'components/Title/Title';
import {Container} from './WeddingPage.styled';

export default function WeddingPage(){
    return(
        <Container>
           <Tittle title={'Вінчання '}/>
           <Wedding/>
        </Container>
    )
}