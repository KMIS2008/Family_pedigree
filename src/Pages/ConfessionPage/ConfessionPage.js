import {ConfessionDescription} from '../../components/ConfessionDescription/ConfessionDescription';
import {Container} from './ConfessionPage.styled';
import { Tittle } from "components/Title/Title";

export default function ConfessionPage(){
    return(
        <Container>
             <Tittle title={"Сповідь"}/>
             <ConfessionDescription/>
        </Container>
    )
}