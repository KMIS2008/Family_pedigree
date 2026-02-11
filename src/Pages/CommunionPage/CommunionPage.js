import { CommunionDiscription } from "components/CommunionDiscription/CommunionDiscription";
import { Tittle } from "components/Title/Title";
import {Container} from './CommunionPage.styled';

export default function CommunionPage(){
    return(
        <Container>
           <Tittle title={'Причастя'}/>
           <CommunionDiscription/>
        </Container>
    )
}