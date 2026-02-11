import {Donations} from '../../components/Donation/Donation';
import { Tittle } from 'components/Title/Title';
import { Container } from './DonationPage.styled';

export default function DonationPage(){
    return(
        <Container>
           <Tittle title="Добровільна пожертва"/>
           <Donations/>
        </Container>
    )
}