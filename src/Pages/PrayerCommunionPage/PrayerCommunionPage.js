import { Communion } from 'components/Communion/Communion';
import {Container} from './PrayerCommunionPage.styled';
import { Tittle } from 'components/Title/Title';

export default function PrayerCommunionPage(){
    return(
        <Container>
            <Tittle title={'Молитовне правило до св. Причастя'}/>
            <Communion/>
        </Container>
    )
}