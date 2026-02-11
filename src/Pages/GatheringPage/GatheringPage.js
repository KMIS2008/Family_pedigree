import {Container} from './GatheringPage.styled';
import { Tittle } from 'components/Title/Title';
import {Gathering} from 'components/Gathering/Gathering';

export default function GatheringPage(){
    return(
        <Container>
            <Tittle title={'Соборування'}/>
            <Gathering/>
        </Container>
    )
}