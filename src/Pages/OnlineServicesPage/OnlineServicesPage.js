import {ServicesForm} from '../../components/Services/Services';
import { Tittle } from 'components/Title/Title';
import {PasswordCheck} from '../../components/PasswordCheck/PasswordCheck';
import { Container } from './OnlineServicesPage.styled';

export default function OnlineServicesPage(){
    return(
        <Container>
           <Tittle Tittle title="Записки за здоров'я та за упокій"></Tittle>
           <ServicesForm/>
           <PasswordCheck/>
        </Container>
    )
} 