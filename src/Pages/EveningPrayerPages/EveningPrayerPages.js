import { Tittle } from "components/Title/Title";
import {Container} from './EveningPrayerPages.styled';
import {EveningPrayers} from 'components/EveningPrayers/EveningPrayers';

export default function EveningPrayerPages(){
    return(
        <Container>
        <Tittle title={"Молитви вечірні"}/>
        <EveningPrayers/>
        </Container>
    )
}