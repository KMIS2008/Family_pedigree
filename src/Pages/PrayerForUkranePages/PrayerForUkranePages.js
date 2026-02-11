import { Tittle } from "components/Title/Title";
import {PrayerForUkrane} from 'components/PrayerForUkrane/PrayerForUkrane';
import {Container} from './PrayerForUkranePages.styled';


export default function PrayerForUkranePages(){
    return(
        <Container>
        <Tittle title={'Молитви за Україну'}/>
        <PrayerForUkrane/>
        </Container>
    )
}