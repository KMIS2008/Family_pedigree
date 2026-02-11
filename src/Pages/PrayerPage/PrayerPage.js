import {AllPrayer} from '../../components/AllPrayer/AllPrayer';
import { Tittle } from 'components/Title/Title';
import { Container, ContainerColum } from './PrayerPage.styled';
import { PrayerDiscription } from 'components/PrayerDiscription/PrayerDiscription';


export default function PrayerPage() {

    return(
        <Container>
        <Tittle Tittle title="Молитви"></Tittle>
        <ContainerColum>
          <AllPrayer />       
          <PrayerDiscription/>          
        </ContainerColum>
        </Container>
    )
}