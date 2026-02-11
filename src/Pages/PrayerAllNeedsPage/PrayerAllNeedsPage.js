import { Tittle } from "components/Title/Title";
import { Container } from "./PrayerAllNeedsPage.styled";
import {PrayerAllNeeds} from '../../components/PrayerAllNeeds/PrayerAllNeeds';

export default function PrayerAllNeedsPage(){
    return(
        <Container>
            <Tittle title={'Молитви на всяку потребу'}></Tittle>
            <PrayerAllNeeds/>
        </Container>
    )
}

