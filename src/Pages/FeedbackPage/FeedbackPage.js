import {Tittle} from '../../components/Title/Title';
import {FeedBack} from '../../components/Feedback/Feedback';
import {PasswordCheck} from '../../components/PasswordCheck/PasswordCheck';
import { Container } from './FeedbackPage.styled';

export default function FeedbackPage(){
    return(
        <Container>
           <Tittle title="Зворотній зв'язок"></Tittle>
           <FeedBack/>
           <PasswordCheck/>
        </Container>
    )
}