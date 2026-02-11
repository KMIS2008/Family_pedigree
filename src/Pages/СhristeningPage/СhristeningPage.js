import {ChristeningMain} from '../../components/СhristeningMain/ChristeningMain';
import {Container} from './ChristeningPage.styled';
import { Tittle } from 'components/Title/Title';
 
export default function ChristeningPage(){
  return(
    <Container>
      <Tittle title={'Таїнство Хрещення у храмі святих апостолів Петра і Павла'}/>
        <ChristeningMain/>
    </Container>
  )
}